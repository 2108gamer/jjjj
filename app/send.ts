"use server"
import { sendEmail } from "@/utils/brevo"
import { send } from "process"
import { redirect } from "next/navigation"

const MailSend = async function Send(formData: FormData) {
const email = formData.get("email")
const email2 = formData.get("ema2")

if (!email || !email2) {
    return alert("Por favor, llena todos los campos")
}

sendEmail()

  redirect("/services")
}

export default MailSend;