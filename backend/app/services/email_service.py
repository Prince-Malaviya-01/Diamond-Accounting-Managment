import smtplib
from email.mime.text import MIMEText
from app.config import get_settings

def send_email(to_email: str, subject: str, body: str) -> bool:
    """
    Sends an email to the specified recipient using settings from the environment.
    """
    settings = get_settings()
    smtp_host = settings.smtp_host
    smtp_port = settings.smtp_port
    smtp_user = settings.smtp_user
    smtp_password = settings.smtp_password

    if not smtp_user or not smtp_password:
        print(f"[Email Service] SMTP not configured. Could not send email to {to_email}. Logging output:")
        print(f"Subject: {subject}")
        print(f"Body:\n{body}\n")
        return False

    try:
        msg = MIMEText(body)
        msg["Subject"] = subject
        msg["From"] = f"no-reply <{smtp_user}>"
        msg["To"] = to_email

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, [to_email], msg.as_string())
        
        print(f"[Email Service] Email sent successfully to {to_email}")
        return True
    except Exception as e:
        print(f"[Email Service ERROR] Failed to send email to {to_email}: {e}")
        return False
