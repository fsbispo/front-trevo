import React, { useState } from "react";
import { FiEdit2, FiCopy, FiEye, FiEyeOff, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { BsBank, BsGift } from "react-icons/bs";
import PrimaryButton from "../components/button/PrimaryButton";
import InputLabel from "../components/form/InputLabel";
import colors from "../styles/styles";
import profileBackground from "../assets/profile-background.jpg";

type TabType = "dados-pessoais" | "historico" | "financeiro";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dados-pessoais");
  const [name, setName] = useState("Corey Lubin");
  const [email, setEmail] = useState("coreylubin@email.com");
  const [phone, setPhone] = useState("+55 13 99123-4567");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showBalance, setShowBalance] = useState(true);

  const userId = "342568719";
  const totalBalance = "R$100.500,00";
  const bonusBalance = "R$0,00";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.gunmetal }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Banner Hero com Imagem */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-8">
          <div
            className="w-full bg-cover bg-center relative"
            style={{
              height: '220px',
              backgroundImage: `url(${profileBackground})`,
              borderRadius: '24px 24px 0 0'
            }}
          >
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.3) 0%, rgba(129, 199, 132, 0.2) 50%, rgba(76, 175, 80, 0.3) 100%)',
              height: '220px'
            }} />
          </div>

          {/* Profile Info Below Image */}
          <div className="relative" style={{ backgroundColor: colors.darkBlue, borderRadius: '0 0 24px 24px' }}>
            <div className="px-6 pt-16 pb-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
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

                <div className="flex items-center gap-4">
                  <div
                    className="rounded-xl p-3 flex items-center gap-3"
                    style={{ backgroundColor: colors.slateBlue }}
                  >
                    <BsGift size={20} style={{ color: colors.springGreen }} />
                    <div>
                      <p className="text-xs" style={{ color: colors.text.muted }}>Bônus total</p>
                      <p className="text-sm font-bold" style={{ color: colors.white }}>{bonusBalance}</p>
                    </div>
                  </div>

                  <div
                    className="rounded-2xl p-5"
                    style={{ backgroundColor: colors.darkBlue, border: `1px solid ${colors.slateBlue}` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <BsBank size={28} style={{ color: colors.springGreen }} />
                        <div>
                          <p className="text-sm" style={{ color: colors.text.muted }}>Saldo total</p>
                          <p className="text-2xl font-bold" style={{ color: colors.white }}>
                            {showBalance ? totalBalance : "•••"}
                          </p>
                        </div>
                      </div>
                      <button
                        className="p-2 hover:opacity-80 transition-opacity"
                        onClick={() => setShowBalance(!showBalance)}
                      >
                        {showBalance ? (
                          <FiEye size={24} style={{ color: colors.text.muted }} />
                        ) : (
                          <FiEyeOff size={24} style={{ color: colors.text.muted }} />
                        )}
                      </button>
                    </div>

                    <div className="flex gap-3">
                      <PrimaryButton variant="primary" size="small">
                        💰 DEPOSITAR
                      </PrimaryButton>
                      <PrimaryButton variant="primary" size="small">
                        💵 SACAR
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar Positioned on Top */}
            <div
              className="absolute left-6"
              style={{ top: '-50px' }}
            >
              <div className="relative">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Corey"
                  alt="Avatar"
                  className="w-24 h-24 rounded-full border-4"
                  style={{ borderColor: colors.springGreen, backgroundColor: colors.darkBlue }}
                />
                <div
                  className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: colors.emerald, borderColor: colors.darkBlue }}
                >
                  <span className="text-sm">🦊</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content Layout */}
        <div className="flex gap-6">
          {/* Tabs Navigation - Vertical */}
          <div className="flex flex-col gap-3 w-64">
            <button
              onClick={() => setActiveTab("dados-pessoais")}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold transition-all text-left"
              style={{
                backgroundColor: activeTab === "dados-pessoais" ? colors.slateBlue : "transparent",
                color: activeTab === "dados-pessoais" ? colors.springGreen : colors.text.muted,
                border: `1px solid ${activeTab === "dados-pessoais" ? colors.slateBlue : colors.darkBlue}`
              }}
            >
              <FiUser size={20} />
              DADOS PESSOAIS
            </button>
            <button
              onClick={() => setActiveTab("historico")}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold transition-all text-left"
              style={{
                backgroundColor: activeTab === "historico" ? colors.slateBlue : "transparent",
                color: activeTab === "historico" ? colors.springGreen : colors.text.muted,
                border: `1px solid ${activeTab === "historico" ? colors.slateBlue : colors.darkBlue}`
              }}
            >
              <span className="text-xl">📊</span>
              HISTÓRICO
            </button>
            <button
              onClick={() => setActiveTab("financeiro")}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold transition-all text-left"
              style={{
                backgroundColor: activeTab === "financeiro" ? colors.slateBlue : "transparent",
                color: activeTab === "financeiro" ? colors.springGreen : colors.text.muted,
                border: `1px solid ${activeTab === "financeiro" ? colors.slateBlue : colors.darkBlue}`
              }}
            >
              <span className="text-xl">💳</span>
              FINANCEIRO
            </button>
          </div>

          {/* Tab Content */}
          <div
            className="flex-1 rounded-3xl p-6"
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
                  className="px-4 py-2 rounded-2xl font-semibold"
                  style={{ backgroundColor: colors.springGreen, color: colors.gunmetal }}
                >
                  Depósito
                </button>
                <button
                  className="px-4 py-2 rounded-2xl font-semibold"
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
                    className="w-10 h-10 rounded-2xl font-semibold"
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
                  className="flex items-center justify-between p-4 rounded-2xl"
                  style={{ backgroundColor: colors.slateBlue }}
                >
                  <div className="flex items-center gap-3">
                    <FiPhone style={{ color: colors.lightBlue }} />
                    <span style={{ color: colors.white }}>Nome da Chave</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="p-2 rounded-xl hover:opacity-80"
                      style={{ backgroundColor: colors.darkBlue }}
                    >
                      <FiEdit2 style={{ color: colors.lightBlue }} />
                    </button>
                    <button
                      className="p-2 rounded-xl hover:opacity-80"
                      style={{ backgroundColor: colors.darkBlue }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between p-4 rounded-2xl"
                  style={{ backgroundColor: colors.slateBlue }}
                >
                  <div className="flex items-center gap-3">
                    <span style={{ color: colors.lightBlue }}>📄</span>
                    <span style={{ color: colors.white }}>Nome da Chave</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="p-2 rounded-xl hover:opacity-80"
                      style={{ backgroundColor: colors.darkBlue }}
                    >
                      <FiEdit2 style={{ color: colors.lightBlue }} />
                    </button>
                    <button
                      className="p-2 rounded-xl hover:opacity-80"
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
    </div>
  );
};

export default Profile;
