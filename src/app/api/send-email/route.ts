import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { settings } from "@/settings/settings";

const { emailDestinatario } = settings;

// Configurações do e-mail
const EMAIL_HOST = "smtplw.com.br";
const EMAIL_PORT = 587;
const EMAIL_USER = "yaslipsmtp";
const EMAIL_PASS = "qSPQYgha5680";
const EMAIL_FROM = "enviodedicado@yaslip.com.br";
const EMAIL_BCC = "backupmail.yaslip@gmail.com";
const CLIENTE_NOME = "Nome do Site";
const EMAIL_TO = emailDestinatario;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 Dados recebidos:", body);

    const { nome, email, telefone, empresa, como_nos_conheceu, mensagem } = body;

    if (!nome || !email || !telefone || !empresa || !mensagem) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: false,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      tls: { rejectUnauthorized: false },
    });

    const htmlContent = `
      <h2>Formulário via site - ${CLIENTE_NOME}</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Empresa:</strong> ${empresa}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Como nos Conheceu:</strong> ${como_nos_conheceu}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
      <p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR")}</p>
    `;

    await transporter.sendMail({
      from: `"${nome}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      bcc: EMAIL_BCC,
      replyTo: email,
      subject: `Contato via Site - ${CLIENTE_NOME}`,
      html: htmlContent,
    });

    console.log("✅ Email enviado com sucesso!");

    return NextResponse.json({
      message: "E-mail enviado com sucesso!",
    });

  } catch (error) {
    console.error("❌ Erro ao processar a requisição:", error);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}
