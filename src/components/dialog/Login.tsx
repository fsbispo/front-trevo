// import { Button } from "../ui/button" // removido: não usado após hideTrigger feature
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "../ui/dialog"
import { useEffect, useState } from "react"
import colors from "../../styles/colors"
import login from "../../assets/login.png"
import loginMobile from "../../assets/login-mobile.png"
import HeaderDialog from "./headerDialog"
import InputLabel from "../form/inputLabel"
import { MdEmail, MdKeyboardArrowLeft } from "react-icons/md"
import { MdLock } from "react-icons/md"
import { HiEye } from "react-icons/hi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { HiEyeOff } from "react-icons/hi"
import TitleSubtitle from "../common/TitleSubtitle"
import PrimaryButton from "../button/primaryButton"
import IconButton from "../button/iconButton"
import SecondaryButton from "../button/secondaryButton"

// Componente auxiliar: Título responsivo
const ResponsiveTitle = ({ title, subtitle, smallClass = "", mediumClass = "" }: { 
    title: string; 
    subtitle: string;
    smallClass?: string;
    mediumClass?: string;
}) => (
    <>
        <TitleSubtitle 
            title={title} 
            subtitle={subtitle} 
            size="small"
            className={`sm:hidden ${smallClass}`}
        />
        <TitleSubtitle 
            title={title} 
            subtitle={subtitle} 
            size="medium"
            className={`hidden sm:block ${mediumClass}`}
        />
    </>
)

// Componente auxiliar: Formulário de login
const LoginForm = ({ onRecoverPassword }: { onRecoverPassword: () => void }) => (
    <form className="flex flex-col gap-2 sm:gap-4">
        <InputLabel
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            leftIcon={<MdEmail size={20} />}
        />
        <InputLabel
            id="password"
            type="password"
            placeholder="Digite sua senha"
            leftIcon={<MdLock size={20} />}
            rightIcon={<HiEye size={20} />}
            rightIconClosed={<HiEyeOff size={20} />}
        />
        <div className="text-xs sm:text-sm text-gray-400 text-right">
            <button 
                type="button"
                onClick={onRecoverPassword}
                className="hover:underline"
            >
                Esqueceu sua senha?
            </button>
        </div>
    </form>
)

// Componente auxiliar: Conteúdo de login
const LoginContent = ({ 
    onRecoverPassword, 
    onSwitchToRegister 
}: { 
    onRecoverPassword: () => void; 
    onSwitchToRegister?: () => void;
}) => (
    <>
        <div className="flex flex-col gap-2 flex-1 justify-center sm:justify-start">
            <div className="mt-5 sm:mt-0">
                <ResponsiveTitle 
                    title="ENTRAR" 
                    subtitle="Entre na sua conta" 
                />
            </div>
            
            <LoginForm onRecoverPassword={onRecoverPassword} />
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 pb-2 sm:pb-0">
            <PrimaryButton 
                variant="primary"
                size="small"
                rightIcon={<MdOutlineKeyboardArrowRight />}
            >
                ENTRAR AGORA
            </PrimaryButton>

            <div className="text-xs sm:text-sm text-gray-400 text-center">
                Não possui conta?{" "}
                <button 
                    type="button"
                    onClick={() => onSwitchToRegister?.()}
                    className="text-green-400 hover:underline"
                >
                    Cadastre-se aqui
                </button>
            </div>
        </div>
    </>
)

// Componente auxiliar: Conteúdo de recuperação de senha
const RecoverPasswordContent = ({ onBack }: { onBack: () => void }) => (
    <>
        <div className="flex flex-col gap-2 flex-1 justify-center sm:justify-start">
            <div className="mt-5 sm:mt-0">
                <ResponsiveTitle 
                    title="RECUPERE SUA SENHA" 
                    subtitle="Digite o e-mail cadastrado e enviaremos um link para redefinir sua senha." 
                />
            </div>
            
            <form className="flex flex-col gap-2 sm:gap-4">
                <InputLabel
                    id="recover-email"
                    type="email"
                    placeholder="E-mail"
                    leftIcon={<MdEmail size={20} />}
                />
            </form>
        </div>

        <div className="flex gap-2 sm:gap-3 w-full pb-2 sm:pb-0">
            <IconButton 
                onClick={onBack} 
                variant='gunmetal' 
                icon={<MdKeyboardArrowLeft />} 
            />
            <PrimaryButton 
                variant="primary"
                size="small"
                rightIcon={<MdOutlineKeyboardArrowRight />}
            >
                ENVIAR LINK
            </PrimaryButton>
        </div>
    </>
)

// Componente de modal de login simples. Para abrir sem botão, controle externamente o estado 'open'
// Exemplo: <LoginDialog forceOpen />
interface LoginDialogProps {
    forceOpen?: boolean; // abre o modal assim que renderizar
    defaultOpen?: boolean; // estado inicial
    hideTrigger?: boolean; // esconder o botão entrar
    onSwitchToRegister?: () => void;
}

export function LoginDialog({ forceOpen = false, defaultOpen = false, hideTrigger = false, onSwitchToRegister }: LoginDialogProps) {
    const [open, setOpen] = useState(false)
    const [showRecoverPassword, setShowRecoverPassword] = useState(false)

        useEffect(() => {
            // define estado inicial
            if (defaultOpen) setOpen(true)
        }, [defaultOpen])

        useEffect(() => {
            if (forceOpen) {
                setOpen(true)
            } else if (!defaultOpen) {
                setOpen(false)
            }
        }, [forceOpen, defaultOpen])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {!hideTrigger && (
              <DialogTrigger asChild>
                  <SecondaryButton variant="secondary" size="small">ENTRAR</SecondaryButton>
              </DialogTrigger>
            )}

            <DialogContent showCloseButton={false}
                className="
                    max-w-none w-full h-full sm:w-[700px] sm:h-[600px] xl:w-[700px] xl:h-[600px]
                    p-0 overflow-hidden sm:rounded-2xl
                "
                style={{
                    borderColor: colors.border.slateBlue,
                    backgroundColor: colors.background.primary
                }}
            >
                <div className="flex flex-col sm:flex-row w-full h-full">
                    {/* Imagem - lado esquerdo apenas no desktop */}
                    <div
                        className="hidden sm:block sm:w-[44.28%] sm:h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${login})`
                        }}
                    />

                    {/* Formulário */}
                    <div className="w-full sm:w-[55.72%] text-white flex flex-col px-4 py-4 sm:px-8 sm:py-8 overflow-y-auto h-full">
                        {/* Logo + título */}
                        <HeaderDialog
                            onClose={() => setOpen(false)}
                        />
                        
                        {/* Imagem - abaixo do header apenas no mobile */}
                        <div
                            className="w-full aspect-video sm:hidden bg-contain bg-center bg-no-repeat mt-4"
                            style={{
                                backgroundImage: `url(${loginMobile})`
                            }}
                        />

                        <div className="flex flex-col justify-between flex-1 gap-4">
                            {!showRecoverPassword ? (
                                <LoginContent 
                                    onRecoverPassword={() => setShowRecoverPassword(true)}
                                    onSwitchToRegister={() => {
                                        setOpen(false)
                                        onSwitchToRegister?.()
                                    }}
                                />
                            ) : (
                                <RecoverPasswordContent 
                                    onBack={() => setShowRecoverPassword(false)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}