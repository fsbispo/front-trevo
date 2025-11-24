import React, { useState } from "react";
import { FiEdit2, FiCopy, FiEye, FiEyeOff, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { BsBank, BsGift } from "react-icons/bs";
import PrimaryButton from "../components/button/PrimaryButton";
import InputLabel from "../components/form/InputLabel";
import colors from "../styles/styles";

type TabType = "dados-pessoais" | "historico" | "financeiro";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dados-pessoais");
  const [name, setName] = useState("Corey Lubin");
  const [email, setEmail] = useState("coreylubin@email.com");
  const [phone, setPhone] = useState("+55 13 99123-4567");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const userId = "342568719";
  const totalBalance = "R$100.500,00";
  const bonusBalance = "R$0,00";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.gunmetal }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Banner Hero com Trevo */}
        <div
          className="relative w-full rounded-2xl overflow-hidden mb-8"
          style={{
            height: '220px',
            background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 50%, #4CAF50 100%)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl opacity-30">🍀</div>
            </div>
          </div>

          {/* Profile Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'rgba(10, 46, 54, 0.8)' }}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Corey"
                    alt="Avatar"
                    className="w-20 h-20 rounded-full border-4"
                    style={{ borderColor: colors.springGreen }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-6 h-6 rounded-full flex items-center justify-center border-2"
                    style={{ backgroundColor: colors.emerald, borderColor: colors.gunmetal }}
                  >
                    <span className="text-xs">🦊</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold" style={{ color: colors.springGreen }}>
                      {name}
                    </h2>
                    <span className="text-orange-400">🏀</span>
                    <button className="p-1 hover:opacity-80">
                      <FiEdit2 size={16} style={{ color: colors.white }} />
                    </button>
                    <button className="p-1 hover:opacity-80" onClick={() => copyToClipboard(userId)}>
                      <FiCopy size={16} style={{ color: colors.white }} />
                    </button>
                  </div>
                  <p className="text-sm" style={{ color: colors.lightBlue }}>
                    ID: {userId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <BsBank style={{ color: colors.springGreen }} />
                    <p className="text-xs" style={{ color: colors.text.muted }}>Saldo total</p>
                  </div>
                  <p className="text-xl font-bold" style={{ color: colors.white }}>
                    {totalBalance}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <PrimaryButton variant="springGreen" size="small">
                    DEPOSITAR 💰
                  </PrimaryButton>
                  <PrimaryButton variant="primary" size="small">
                    SACAR 💵
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Card */}
        <div
          className="rounded-xl p-4 mb-6"
          style={{ backgroundColor: colors.darkBlue, border: `1px solid ${colors.slateBlue}` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BsGift size={24} style={{ color: colors.springGreen }} />
              <div>
                <p className="text-xs" style={{ color: colors.text.muted }}>Bônus total</p>
                <p className="text-lg font-bold" style={{ color: colors.white }}>{bonusBalance}</p>
              </div>
            </div>
            <FiEye style={{ color: colors.text.muted }} />
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("dados-pessoais")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: activeTab === "dados-pessoais" ? colors.slateBlue : "transparent",
              color: activeTab === "dados-pessoais" ? colors.springGreen : colors.text.muted,
              border: `1px solid ${activeTab === "dados-pessoais" ? colors.slateBlue : "transparent"}`
            }}
          >
            <FiUser size={18} />
            DADOS PESSOAIS
          </button>
          <button
            onClick={() => setActiveTab("historico")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: activeTab === "historico" ? colors.slateBlue : "transparent",
              color: activeTab === "historico" ? colors.springGreen : colors.text.muted,
              border: `1px solid ${activeTab === "historico" ? colors.slateBlue : "transparent"}`
            }}
          >
            📊 HISTÓRICO
          </button>
          <button
            onClick={() => setActiveTab("financeiro")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: activeTab === "financeiro" ? colors.slateBlue : "transparent",
              color: activeTab === "financeiro" ? colors.springGreen : colors.text.muted,
              border: `1px solid ${activeTab === "financeiro" ? colors.slateBlue : "transparent"}`
            }}
          >
            💳 FINANCEIRO
          </button>
        </div>

        {/* Tab Content */}
        <div
          className="rounded-xl p-6"
          style={{ backgroundColor: colors.darkBlue, border: `1px solid ${colors.slateBlue}` }}
        >
          {activeTab === "dados-pessoais" && (
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: colors.white }}>
                Dados Pessoais
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputLabel
                  label="Nome"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  leftIcon={<FiUser size={18} />}
                  rightIcon={<FiEdit2 size={18} />}
                  variant="secondary"
                />

                <div className="md:col-start-1">
                  <InputLabel
                    label="E-mail"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    leftIcon={<FiMail size={18} />}
                    rightIcon={<FiEdit2 size={18} />}
                    variant="secondary"
                  />
                </div>

                <div className="md:col-start-1">
                  <InputLabel
                    label="Telefone"
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    leftIcon={<FiPhone size={18} />}
                    rightIcon={<FiEdit2 size={18} />}
                    variant="secondary"
                  />
                </div>

                <div className="md:col-start-1">
                  <InputLabel
                    label="Senha atual"
                    id="current-password"
                    type="password"
                    placeholder="••••••••"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    leftIcon={<FiLock size={18} />}
                    rightIcon={<FiEye size={18} />}
                    rightIconClosed={<FiEyeOff size={18} />}
                    variant="secondary"
                  />
                </div>

                <div className="md:col-start-1">
                  <InputLabel
                    label="Nova senha"
                    id="new-password"
                    type="password"
                    placeholder="Insira sua nova senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    leftIcon={<FiLock size={18} />}
                    rightIcon={<FiEye size={18} />}
                    rightIconClosed={<FiEyeOff size={18} />}
                    variant="secondary"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="w-64">
                  <PrimaryButton variant="primary">
                    SALVAR ALTERAÇÕES 💾
                  </PrimaryButton>
                </div>
              </div>
            </div>
          )}

          {activeTab === "historico" && (
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: colors.white }}>
                Histórico de Apostas
              </h3>

              <div className="flex gap-2 mb-6">
                <button
                  className="px-4 py-2 rounded-lg font-semibold"
                  style={{ backgroundColor: colors.springGreen, color: colors.gunmetal }}
                >
                  Depósito
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-semibold"
                  style={{ backgroundColor: colors.slateBlue, color: colors.lightBlue }}
                >
                  Saque
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: colors.springGreen }}>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: colors.gunmetal }}>Data</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: colors.gunmetal }}>Status</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: colors.gunmetal }}>Tipo</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: colors.gunmetal }}>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: "27/10/25", status: "Pendente", type: "PIX", value: "R$10,00", statusColor: "#F59E0B" },
                      { date: "28/10/25", status: "Sucesso", type: "PIX", value: "R$20,00", statusColor: colors.emerald },
                      { date: "27/10/25", status: "Erro", type: "PIX", value: "R$10,00", statusColor: "#EF4444" },
                      { date: "27/10/25", status: "Sucesso", type: "PIX", value: "R$20,00", statusColor: colors.emerald },
                    ].map((item, index) => (
                      <tr key={index} style={{ backgroundColor: colors.slateBlue }}>
                        <td className="px-4 py-3" style={{ color: colors.white }}>{item.date}</td>
                        <td className="px-4 py-3">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ backgroundColor: item.statusColor, color: colors.white }}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-3" style={{ color: colors.lightBlue }}>{item.type}</td>
                        <td className="px-4 py-3" style={{ color: colors.white }}>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {[1, 2, 3, 4, ">"].map((page, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-lg font-semibold"
                    style={{
                      backgroundColor: page === 1 ? colors.lightBlue : colors.slateBlue,
                      color: page === 1 ? colors.gunmetal : colors.lightBlue
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "financeiro" && (
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: colors.white }}>
                Informações Financeiras
              </h3>

              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold" style={{ color: colors.springGreen }}>
                  Chaves PIX
                </h4>
                <PrimaryButton variant="springGreen" size="small">
                  ADICIONAR NOVA 🔑
                </PrimaryButton>
              </div>

              <div className="space-y-4">
                <div
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{ backgroundColor: colors.slateBlue }}
                >
                  <div className="flex items-center gap-3">
                    <FiPhone style={{ color: colors.lightBlue }} />
                    <span style={{ color: colors.white }}>Nome da Chave</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="p-2 rounded-lg hover:opacity-80"
                      style={{ backgroundColor: colors.darkBlue }}
                    >
                      <FiEdit2 style={{ color: colors.lightBlue }} />
                    </button>
                    <button
                      className="p-2 rounded-lg hover:opacity-80"
                      style={{ backgroundColor: colors.darkBlue }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{ backgroundColor: colors.slateBlue }}
                >
                  <div className="flex items-center gap-3">
                    <span style={{ color: colors.lightBlue }}>📄</span>
                    <span style={{ color: colors.white }}>Nome da Chave</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="p-2 rounded-lg hover:opacity-80"
                      style={{ backgroundColor: colors.darkBlue }}
                    >
                      <FiEdit2 style={{ color: colors.lightBlue }} />
                    </button>
                    <button
                      className="p-2 rounded-lg hover:opacity-80"
                      style={{ backgroundColor: colors.darkBlue }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
