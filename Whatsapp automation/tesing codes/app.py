from flask import Flask, request
from twilio.rest import Client

app = Flask(__name__)

# Twilio Credentials
ACCOUNT_SID = "AC8bd907b29df182a05c5fb39438bed07c"
AUTH_TOKEN = "bbfb171d2b9ef58da1b265ad1b3a80f6"
WHATSAPP_NUMBER = "whatsapp:+14155238886"  # Twilio Sandbox Number
CONTENT_SID = "HXf7ecc20aefcbb7aec462d37b7b643dd1"  # Twilio Console se Approved Template ka Content SID

client = Client(ACCOUNT_SID, AUTH_TOKEN)

@app.route("/whatsapp", methods=["POST"])
def whatsapp_reply():
    """Handle incoming WhatsApp messages"""
    incoming_msg = request.form.get("Body", "").strip().lower()
    from_number = request.form.get("From")

    print(f"📥 Incoming message: {incoming_msg}")  # Debugging ke liye print

    if incoming_msg in ["hi", "hello", "hii"]:
        send_pre_approved_template(from_number)  # Twilio Content Template use karega

    elif incoming_msg == "menu":  
        send_menu(from_number)

    elif incoming_msg == "contact suppory":  
        send_support_info(from_number)

    else:
        send_message(from_number, "❌ Invalid option. Type 'Hi' to start! 😊")

    return "OK", 200

def send_pre_approved_template(to):
    """Twilio Content Template ka use karke Interactive Message bhejo"""
    client.messages.create(
        from_=WHATSAPP_NUMBER,
        to=to,
        content_sid=CONTENT_SID  # Ye Twilio Console me approved hona chahiye
    )

def send_menu(to):
    """Simple text-based menu send karega"""
    send_message(to, "🍔 *Menu:*\n1️⃣ Burger - ₹99\n2️⃣ Pizza - ₹199\n\nReply with the item number to order! ✅")

def send_support_info(to):
    """Support contact details bhejne ka function"""
    send_message(to, "📞 *Contact Support:* +919730182225")

def send_message(to, body):
    """Normal text message send karne ka function"""
    client.messages.create(from_=WHATSAPP_NUMBER, to=to, body=body)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
