"use client";
import { useState } from "react";
import { settings } from "@/settings/settings";
import { ResponseData, FormData } from "@/types";
import styles from './ContactForm.module.scss';
import { FormDataSchema } from "@/schemas/form";

const { siteName, emailDestinatario } = settings;

export default function ContactForm({ variation }: { variation: string }) {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    como_nos_conheceu: "",
    mensagem: "",
  });
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function phoneFormat(e: React.FormEvent<HTMLInputElement>): void {
    e.preventDefault();
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    e.currentTarget.value = value;
  }

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataValid = FormDataSchema.parse(formData);
      setMessage("Enviando e-mail...");

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataValid),
      });

      const data: ResponseData = await res.json();
      setMessage(data.message || data.error || "Erro ao enviar email.");

      if (!res.ok) return;

      setFormData({
        nome: "",
        email: "",
        empresa: "",
        telefone: "",
        como_nos_conheceu: "",
        mensagem: "",
      });

      setMessage("Email enviado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      setMessage("Erro ao enviar email.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles[variation]}`}>
      {message && <p className={styles.formSuccess}>{message}</p>}
      <div className={styles.boxInput}>
        <div className={styles.inputForm}>
          <label htmlFor="nome"><span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
          />
        </div>
        <div className={styles.inputForm}>
          <label htmlFor="email"><span style={{ color: "red" }}>*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div className={styles.boxInput}>
        <div className={styles.inputForm}>
          <label htmlFor="telefone"><span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            maxLength={15}
            name="telefone"
            id="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onKeyUp={phoneFormat}
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.inputForm}>
          <label htmlFor="empresa"><span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            maxLength={15}
            name="empresa"
            id="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onKeyUp={phoneFormat}
            onChange={(e) =>
            setFormData({ ...formData, empresa: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div className={styles.inputForm}>
        <label htmlFor="como_nos_conheceu">  <span style={{ color: "red" }}>*</span></label>
        <select
          value={formData.como_nos_conheceu}
          name="como_nos_conheceu"
          id="como_nos_conheceu"
          onChange={(e) =>
            setFormData({ ...formData, como_nos_conheceu: e.target.value })
          }
          required
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="Busca do Google">Busca do Google</option>
          <option value="Outros Buscadores">Outros Buscadores</option>
          <option value="Links Patrocinados">Links patrocinados</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Indicação de um amigo">Indicação de um amigo</option>
          <option value="Outros">Outros</option>
        </select>
      </div>
      <div className={styles.inputForm}>
        <label htmlFor="mensagem"><span style={{ color: "red" }}>*</span></label>
        <textarea
          placeholder="Mensagem"
          id="mensagem"
          value={formData.mensagem}
          name="mensagem"
          onChange={(e) =>
            setFormData({ ...formData, mensagem: e.target.value })
          }
          required
        />
      </div>
      <button className={styles.btnSubmit} type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
