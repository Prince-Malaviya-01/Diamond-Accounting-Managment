# 💎 Diamond Processing Management System - AWS Live Deployment Guide (GitHub + Elastic IP Edition)

This guide provides a comprehensive, step-by-step walkthrough to deploy your **Diamond Processing Management System** on an **AWS EC2 Free Tier Instance** by importing the code **directly from GitHub** and setting up a **Static IP (AWS Elastic IP)** that remains permanent even if you restart the server.

---

## 🏗️ System Architecture & Workflow

Here is how the system works when deployed to AWS:

1. **AWS EC2 Instance (Live Server with Static Elastic IP)**:
   - Runs the **FastAPI Backend** (port `8000`).
   - Runs the **Queue Worker** (processes jobs & runs automatic cleanup in the background).
   - Runs the **PostgreSQL Database** (stores user accounts, job logs, prices, etc.).
   - Serves the **React Frontend** (via Nginx on standard HTTP Port `80`).
2. **Local Office PC (Admin Backup PC)**:
   - Runs `backend/local_file_service.py` locally on port `3001`.
   - Has a physical **D: Drive** with `D:\Diamond_Backup_Files` and `D:\Online`.
   - Connects to the AWS Live Server, downloads every uploaded file permanently, and syncs status.
3. **File Auto-Delete Logic (Disk Cleanup)**:
   - Clients send large files (approx. 25MB). Admin uploads complete results (approx. 25MB). Total = 50MB per job.
   - To prevent the AWS Free Tier SSD (30GB limit) from getting full, we have set up an **auto-delete timer of 4 Days**.
   - Every 4 days, the backend worker physically deletes old files from the AWS EC2 disk (`stone`, `done`, and `completed` directories).
   - **Crucial**: The record details (Stone ID, weight, company, cost, dates) **remain in the UI and Database forever**. Only the large physical files are deleted.
   - Before they are deleted from AWS, your **Local Backup Service** running in your office has already downloaded them safely to your physical D: drive!

---

## 💰 AWS Elastic IP (Static IP) Price: Free or Paid?

* **Is it Free?** **YES, 100% FREE!** 
* **The Rule**: AWS allocates Elastic IPs for **FREE** as long as:
  1. The Elastic IP is **associated (linked)** with a running EC2 instance.
  2. You only use **one** Elastic IP per instance.
* **When is it Charged?** AWS will only charge you a tiny fee (around $0.005/hour) if you allocate an Elastic IP but **keep it idle** (i.e. your EC2 instance is stopped or deleted, but you forgot to release the Elastic IP).
* **Summary**: As long as your server is running 24/7, using an Elastic IP will cost you **₹0 / $0**.

---

## 📋 Prerequisites

1. An **AWS Account** (Free Tier eligible).
2. A **GitHub Account**.
3. A local machine running Windows with your project source code.
4. Git installed locally and on your AWS server.

---

## 🚀 Step 1: Launch AWS EC2 Instance

1. Log into your **AWS Console** and go to **EC2 Dashboard**.
2. Click **Launch Instance** and set:
   - **Name**: `Diamond-Processing-Server`
   - **OS (AMI)**: `Ubuntu Server 24.04 LTS` (Highly Recommended).
   - **Instance Type**: `t2.micro` (or `t3.micro` depending on your AWS region) — **Free Tier Eligible**.
   - **Key Pair**: Create a new key pair (e.g., `diamond-key.pem`). Download it and save it securely on your local PC.
   - **Storage**: Change size to **30 GB** gp3 (Free Tier allows up to 30GB of SSD storage).
3. **Network Settings (Security Group)**:
   - Enable **Allow SSH traffic** (from anywhere).
   - Click **Add Security Group Rule** and add:
     * **Port 80 (HTTP)**: Custom TCP, Port 80, Source: `0.0.0.0/0` (To access website).
     * **Port 443 (HTTPS)**: Custom TCP, Port 443, Source: `0.0.0.0/0` (For secure SSL).
     * **Port 8000**: Custom TCP, Port `8000`, Source: `0.0.0.0/0` (For FastAPI backend).
4. Click **Launch Instance**.

---

## 🔗 Step 2: Allocate & Associate AWS Elastic IP (Static IP)

By default, every time you reboot your EC2 instance, AWS changes its IP address. To prevent this, let's bind a permanent Static IP:

1. In the left-hand menu of the EC2 Console, scroll down to **Network & Security** and click on **Elastic IPs**.
2. Click the orange **Allocate Elastic IP address** button at the top right.
3. Keep default settings (Amazon's pool of IPv4 addresses) and click **Allocate** at the bottom.
4. You will see a new Static IP address allocated (e.g. `15.206.12.34`).
5. Select the checkbox next to your new Elastic IP, click the **Actions** dropdown menu at the top, and select **Associate Elastic IP address**.
6. On the association page:
   - **Resource type**: Choose **Instance**.
   - **Instance**: Click the search box and select your running `Diamond-Processing-Server` instance.
   - **Private IP address**: Click the search box and select the default private IP of the instance.
7. Click **Associate**.
8. **Congratulations!** Your server now has a permanent Static IP address (e.g., `15.206.12.34`). Use this IP for all configurations.

---

## 🐙 Step 3: Push Your Project to GitHub (Locally)

Do this on your **Local Windows PC** to make your code available for importing on AWS:

1. Open a PowerShell terminal in the root directory `d:\Magic`:
   ```powershell
   cd d:\Magic
   ```
2. Initialize git and commit your files:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - AWS ready with 4-day cleanup and dynamic base URL"
   ```
3. Create a new **Private** (or Public) repository on GitHub named `diamond-processing`.
4. Link your local repository to GitHub and push your code:
   ```powershell
   git remote add origin https://github.com/<your-username>/diamond-processing.git
   git branch -M main
   git push -u origin main
   ```
   *(If your repo is Private, GitHub will ask you to authenticate. You can use your GitHub credentials or a Personal Access Token).*

---

## 📦 Step 4: Prepare & Compile React Frontend Locally

Since your AWS EC2 instance has only **1 GB RAM**, running a compilation build (`npm run build`) on AWS might overload the server and crash it. **Always build the frontend on your local computer** and push the finished `dist` folder to GitHub.

1. Open a PowerShell/terminal in your local project directory:
   ```powershell
   cd d:\Magic\frontend
   ```
2. **Build the production files**:
   ```powershell
   npm run build
   ```
   This will create a folder named `dist` inside your `frontend/` directory containing highly-optimized static HTML, CSS, and JS.
3. Commit and push the `dist` folder to GitHub:
   ```powershell
   cd d:\Magic
   git add frontend/dist
   git commit -m "compiled production frontend dist"
   git push origin main
   ```

---

## 🔑 Step 5: Connect to your AWS EC2 Server via SSH

1. Open PowerShell or Command Prompt on your local computer.
2. Go to the directory where you downloaded the AWS Key Pair file (`.pem`):
   ```powershell
   cd C:\Users\admin\Downloads
   ```
3. Connect to your EC2 instance using your new **Static Elastic IP**:
   ```bash
   ssh -i "diamond-key.pem" ubuntu@<YOUR_STATIC_ELASTIC_IP>
   # Example: ssh -i "diamond-key.pem" ubuntu@15.206.12.34
   ```
4. Type `yes` and press Enter when prompted. You are now inside your remote AWS Ubuntu terminal!

---

## 🛠️ Step 6: Install Dependencies on AWS EC2 Server

Run these commands inside your EC2 Ubuntu terminal to update the OS and install Python, Node.js, and PostgreSQL:

```bash
# 1. Update package list and install system libraries
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3-pip python3-venv python3-dev git curl nginx build-essential libpq-dev

# 2. Install Node.js (Version 20 LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Install PM2 (Process Manager to run backend & worker 24/7 in background)
sudo npm install -g pm2
```

---

## 🐘 Step 7: Install & Configure PostgreSQL on AWS

If you want to run PostgreSQL directly on the same EC2 instance (Free Tier):

```bash
# 1. Install PostgreSQL server
sudo apt install -y postgresql postgresql-contrib

# 2. Start and enable PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# 3. Create a database and database user
sudo -i -u postgres psql -c "CREATE DATABASE diamond;"
sudo -i -u postgres psql -c "CREATE USER postgres WITH PASSWORD '123456';"
sudo -i -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE diamond TO postgres;"

# 4. (For PostgreSQL 15+) Grant schema permissions
sudo -i -u postgres psql -d diamond -c "GRANT ALL ON SCHEMA public TO postgres;"
```

---

## 🐙 Step 8: Clone (Import) Code directly from GitHub to AWS

Now, instead of using slow FTP clients, we will download the code directly from GitHub in 1 second!

1. Go to the home directory of the `ubuntu` user:
   ```bash
   cd /home/ubuntu
   ```
2. **Clone your repository**:
   - **If Public repo**:
     ```bash
     git clone https://github.com/<your-username>/diamond-processing.git Magic
     ```
   - **If Private repo** (Recommended for security):
     Create a [GitHub Personal Access Token (Classic)](https://github.com/settings/tokens) with `repo` scope and use it as your password when cloning:
     ```bash
     git clone https://<your-username>:<your-personal-access-token>@github.com/<your-username>/diamond-processing.git Magic
     ```
3. Your code is now fully imported into `/home/ubuntu/Magic`!

> [!TIP]
> **How to update code in the future?**
> Whenever you make changes locally on your Windows PC:
> 1. Push changes to GitHub: `git push origin main`
> 2. Connect to your EC2 via SSH and pull updates instantly:
>    ```bash
>    cd /home/ubuntu/Magic
>    git pull
>    pm2 restart all
>    ```
> That's it! No manual copying needed ever again.

---

## 🐍 Step 9: Setup and Run the Python Backend on AWS

1. Navigate to the backend folder inside your SSH terminal:
   ```bash
   cd /home/ubuntu/Magic/backend
   ```
2. **Create Python Virtual Environment (`.venv`)**:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```
3. **Install Requirements**:
   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```
4. **Create the Environment File (`.env`)**:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` using nano:
   ```bash
   nano .env
   ```
   Ensure the variables are set correctly:
   ```env
   DATABASE_URL=postgresql+psycopg://postgres:123456@localhost:5432/diamond
   SECRET_KEY=diamond_production_secure_secret_12345
   ACCESS_TOKEN_EXPIRE_MINUTES=120
   DOWNLOAD_LINK_EXPIRE_MINUTES=30
   MAX_UPLOAD_SIZE_MB=100
   ALLOWED_EXTENSIONS=.csv,.xlsx,.xls,.txt,.zip,.pdf,.adv
   WORKER_POLL_SECONDS=2
   MAX_JOB_RETRIES=3
   AUTO_DRIVE_SYNC_ENABLED=true
   AUTO_DRIVE_DEFAULT_WEIGHT=0.0
   ```
   *(Press `Ctrl+O` then `Enter` to save, and `Ctrl+X` to exit nano)*.

---

## 🚀 Step 10: Run Backend & Worker 24/7 in Background using PM2

PM2 will manage your backend processes and restart them automatically on server reboots.

1. **Activate the environment and verify running**:
   ```bash
   cd /home/ubuntu/Magic/backend
   source .venv/bin/activate
   ```

2. **Start the FastAPI Backend under PM2**:
   ```bash
   pm2 start ".venv/bin/uvicorn" --name "diamond-backend" -- app.main:app --host 0.0.0.0 --port 8000
   ```

3. **Start the Background Queue Worker under PM2**:
   ```bash
   pm2 start ".venv/bin/python" --name "diamond-worker" -- -m app.queue.worker
   ```

4. **Verify both are active and running**:
   ```bash
   pm2 status
   ```
   You should see both processes listed as `online`.

5. **Configure PM2 to start automatically on system reboots**:
   ```bash
   pm2 save
   pm2 startup
   ```
   *(Copy and run the `sudo env PATH=...` command shown on your screen to complete systemd startup config)*.

---

## 🌐 Step 11: Serve the React Frontend on AWS using Nginx

Nginx will host your React frontend static files (`dist`) on Port `80` (HTTP).

1. **Configure Nginx**:
   Create a new configuration file:
   ```bash
   sudo nano /etc/nginx/sites-available/diamond
   ```
   Paste the following configuration:
   ```nginx
   server {
       listen 80;
       server_name _; # Or your domain name if you buy one

       # Root directory of your frontend build
       root /home/ubuntu/Magic/frontend/dist;
       index index.html;

       # Frontend Routing: fallback to index.html for React SPA Router
       location / {
           try_files $uri $uri/ /index.html;
       }

       # Proxy backend API requests on /auth, /jobs, /admin, etc. to FastAPI on port 8000
       location ~ ^/(auth|jobs|admin|billing|analytics|users|docs|openapi.json) {
           proxy_pass http://127.0.0.1:8000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```
   *(Press `Ctrl+O` then `Enter` to save, and `Ctrl+X` to exit nano)*.

2. **Enable the configuration & Restart Nginx**:
   ```bash
   # Enable the site
   sudo ln -s /etc/nginx/sites-available/diamond /etc/nginx/sites-enabled/
   
   # Remove default nginx site to avoid port conflicts
   sudo rm /etc/nginx/sites-enabled/default
   
   # Test Nginx syntax configuration
   sudo nginx -t
   
   # Restart Nginx
   sudo systemctl restart nginx
   ```

Now, when clients or admins open `http://<YOUR_STATIC_ELASTIC_IP>` in their browser:
- Nginx automatically loads the **React website** on port 80.
- All database/API queries are handled internally via Nginx proxy to FastAPI running on port 8000!

---

## 💻 Step 12: Run the Local File Backup Service on Admin's PC

This is the code running on your office computer that downloads backup copies of all files to the **D: Drive** (`D:\Diamond_Backup_Files`) before the AWS server deletes them.

1. **Keep Python Running Locally**:
   Ensure you keep running the command in your office PC terminal:
   ```powershell
   python backend/local_file_service.py
   ```
   This will keep the backup service alive at `http://localhost:3001` on your admin machine.

2. **Configure Local Sync from Admin Web Dashboard**:
   - Open your browser and go to your AWS live website: `http://<YOUR_STATIC_ELASTIC_IP>` (e.g. `http://15.206.12.34`).
   - Log in as the `admin` user.
   - Go to the **Admin Dashboard** and click on the **Backup & Local Service** tab.
   - In the settings section, configure your AWS Server details:
     * **Server URL**: `http://<YOUR_STATIC_ELASTIC_IP>:8000` (FastAPI backend address)
     * **Username**: `admin`
     * **Password**: `admin123` (Your real admin password)
     * **Backup folder**: `D:\Diamond_Backup_Files` (or any path you prefer)
   - Click **Connect & Save**.
   - Your local PC service will now connect to AWS every 15 seconds, scan for new client uploaded files, and download them automatically to `D:\Diamond_Backup_Files\<ClientName>\`!
   - You can also click **Sync Now** to force an immediate backup cycle!

---

## 🛠️ Common Troubleshooting

* **Check PM2 logs if something fails**:
  ```bash
  pm2 logs diamond-backend
  pm2 logs diamond-worker
  ```
* **Restarting Services**:
  ```bash
  pm2 restart all
  sudo systemctl restart nginx
  ```
* **PostgreSQL Connection issues**:
  Ensure you started postgresql: `sudo systemctl status postgresql` and created the DB/User exactly.

---

### 🎉 Your project is now 100% Live on AWS EC2 with a Static IP!
Clients can upload files, Admin can process them, files auto-delete from AWS after 4 days to save space, and your office computer keeps a permanent backup copy in real-time!
