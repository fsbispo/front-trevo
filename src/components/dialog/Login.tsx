import { useEffect, useState } from "react"
import BaseAuthDialog from "./BaseAuthDialog"
import InputLabel from "../form/InputLabel"
import { MdEmail, MdKeyboardArrowLeft } from "react-icons/md"
import { MdLock } from "react-icons/md"
import { HiEye } from "react-icons/hi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { HiEyeOff } from "react-icons/hi"
import TitleSubtitle from "../common/TitleSubtitle"
import PrimaryButton from "../button/PrimaryButton"
import IconButton from "../button/IconButton"
import SecondaryButton from "../button/SecondaryButton"

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

const LoginForm = ({ onRecoverPassword }: { onRecoverPassword: () => void }) => (
    <form className="flex flex-col gap-2">
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

const LoginContent = ({ 
    onRecoverPassword, 
    onSwitchToRegister 
}: { 
    onRecoverPassword: () => void; 
    onSwitchToRegister?: () => void;
}) => (
    <div className="flex flex-col flex-1 gap-2 sm:gap-16">
        <div className="mt-5 sm:mt-0">
            <ResponsiveTitle 
                title="ENTRAR" 
                subtitle="Entre na sua conta" 
            />
        </div>
        
        <LoginForm onRecoverPassword={onRecoverPassword} />

    <div className="flex flex-col gap-2 sm:gap-3 sm:mt-auto">
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
    </div>
)

const RecoverPasswordContent = ({ onBack }: { onBack: () => void }) => (
    <div className="flex flex-col flex-1 gap-2 sm:gap-16">
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

    <div className="flex gap-2 sm:gap-3 w-full sm:mt-auto">
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
    </div>
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
        <BaseAuthDialog 
            open={open} 
            onOpenChange={setOpen}
            trigger={!hideTrigger ? <SecondaryButton variant="secondary" size="small">ENTRAR</SecondaryButton> : undefined}
        >
            <div className="flex flex-col sm:justify-between flex-1 gap-4">
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
        </BaseAuthDialog>
    )
}