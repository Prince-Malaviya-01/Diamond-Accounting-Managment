/**
 * Local file service utilities for saving downloads to D:\Online\
 * Uses a local service running on localhost:3001
 */

const LOCAL_SERVICE_URL = "http://localhost:3001";

/**
 * Check if local file service is available
 */
export const isLocalServiceAvailable = async () => {
  try {
    const res = await fetch(`${LOCAL_SERVICE_URL}/health`, { 
      method: "GET",
      mode: "cors",
      timeout: 2000 
    });
    return res.ok;
  } catch {
    return false;
  }
};

/**
 * Save blob to D:\Online\ folder using local service
 * @param {Blob} data - The file data
 * @param {string} filename - The filename to save as
 * @returns {Promise<boolean>} - true if saved successfully
 */
export const saveToOnlineFolder = async (data, filename) => {
  try {
    // Check if service is available
    const available = await isLocalServiceAvailable();
    if (!available) {
      console.log("Local file service not available");
      return false;
    }

    // Convert blob to base64
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = async () => {
        try {
          const base64Data = reader.result.split(",")[1]; // Remove data:application/octet-stream;base64, prefix
          
          const response = await fetch(`${LOCAL_SERVICE_URL}/save-file`, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              filename: filename,
              data: base64Data
            })
          });

          if (response.ok) {
            const result = await response.json();
            console.log("File saved:", result.message);
            resolve(true);
          } else {
            console.error("Failed to save file");
            resolve(false);
          }
        } catch (err) {
          console.error("Error saving to Online folder:", err);
          resolve(false);
        }
      };
      reader.readAsDataURL(data);
    });
  } catch (err) {
    console.error("Error in saveToOnlineFolder:", err);
    return false;
  }
};

/**
 * Download file - uses local service to save to D:\Online\
 * Falls back to default browser download if service unavailable
 * @param {Blob} data - The file data
 * @param {string} filename - The filename to save as
 */
export const downloadFile = async (data, filename) => {
  // Try to save using local service first
  const savedToOnline = await saveToOnlineFolder(data, filename);

  if (!savedToOnline) {
    // Fallback to default browser download
    console.log("Falling back to default download");
    const url = URL.createObjectURL(data);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
};

/**
 * Open D:\Online\ folder in file explorer
 */
export const openOnlineFolder = async () => {
  try {
    const response = await fetch(`${LOCAL_SERVICE_URL}/open-folder`, {
      method: "GET",
      mode: "cors"
    });
    
    if (response.ok) {
      return true;
    }
    return false;
  } catch (err) {
    console.error("Error opening folder:", err);
    return false;
  }
};

/**
 * List files in D:\Online\ folder
 */
export const listOnlineFiles = async () => {
  try {
    const response = await fetch(`${LOCAL_SERVICE_URL}/list-files`, {
      method: "GET",
      mode: "cors"
    });
    
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (err) {
    console.error("Error listing files:", err);
    return null;
  }
};
