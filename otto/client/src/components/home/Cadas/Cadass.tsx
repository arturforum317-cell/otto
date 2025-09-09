"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Lock, User, Github, Chrome } from "lucide-react";

// Tipagens para animações
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SignUpArt() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4">
      {/* Background art */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-emerald-400 via-lime-400 to-green-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        />
      </div>

      {/* Card */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="relative z-10 grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-white/80 shadow-xl ring-1 ring-black/5 backdrop-blur md:grid-cols-2"
      >
        {/* Left: art + copy */}
        <div className="relative hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 p-10 text-white md:flex md:flex-col md:justify-between">
          <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{backgroundImage: "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 30%, white 0, transparent 35%), radial-gradient(circle at 40% 80%, white 0, transparent 35%)"}} />

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Crie sua conta</h1>
            <p className="mt-3 text-white/90 max-w-sm">
              Entre para o painel e gerencie seus projetos com uma interface limpa, rápida e responsiva.
            </p>
          </div>

          <ul className="space-y-3 text-sm/6 mt-8">
            <li className="flex items-start gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">1</span>
              Cadastre-se em segundos.
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">2</span>
              Confirme seu e‑mail para ativar recursos extras.
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">3</span>
              Personalize o seu perfil.
            </li>
          </ul>

          <div className="mt-8 text-xs text-white/75">
            Ao continuar, você concorda com nossos Termos e Política de Privacidade.
          </div>
        </div>

        {/* Right: form */}
        <div className="relative p-6 sm:p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Vamos começar</h2>
            <p className="mt-2 text-sm text-gray-600">Crie sua conta abaixo ou use um provedor social.</p>
          </div>

          <form className="space-y-5">
            {/* Nome */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">Nome</label>
              <div className="group relative">
                <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  className="w-full rounded-xl border border-gray-200 bg-white px-10 py-3 text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">E‑mail</label>
              <div className="group relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="voce@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-10 py-3 text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">Senha</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Mínimo 8 caracteres"
                  className="w-full rounded-xl border border-gray-200 bg-white px-10 py-3 text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 pr-10"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-gray-500 hover:bg-gray-100"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            {/* Confirmar Senha */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">Confirmar senha</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  placeholder="Repita a senha"
                  className="w-full rounded-xl border border-gray-200 bg-white px-10 py-3 text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 pr-10"
                />
                <button
                  type="button"
                  aria-label={showConfirm ? "Ocultar confirmação" : "Mostrar confirmação"}
                  onClick={() => setShowConfirm((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-gray-500 hover:bg-gray-100"
                >
                  {showConfirm ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            {/* Termos */}
            <div className="flex items-start gap-3 text-sm">
              <input id="terms" type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
              <label htmlFor="terms" className="text-gray-600">
                Eu li e aceito os <a href="#" className="font-medium text-emerald-700 underline-offset-2 hover:underline">Termos</a> e a <a href="#" className="font-medium text-emerald-700 underline-offset-2 hover:underline">Política de Privacidade</a>.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-px"
            >
              Criar conta
            </button>

            {/* Divider */}
            <div className="relative py-2 text-center text-sm text-gray-500">
              <span className="relative z-10 bg-white px-3">ou</span>
              <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-gray-200" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-800 shadow-sm hover:bg-gray-50"
              >
                <Chrome className="h-5 w-5" />
                Entrar com Google
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-800 shadow-sm hover:bg-gray-50"
              >
                <Github className="h-5 w-5" />
                Entrar com GitHub
              </button>
            </div>

            {/* Login link */}
            <p className="text-center text-sm text-gray-600">
              Já tem conta? <a href="#" className="font-medium text-emerald-700 underline-offset-2 hover:underline">Entrar</a>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
