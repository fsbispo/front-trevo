import { useEffect, useState } from "react"
import BaseAuthDialog from "./BaseAuthDialog"
import InputLabel from "../form/InputLabel"
import { MdEmail, MdPerson, MdPhone } from "react-icons/md"
import { MdLock } from "react-icons/md"
import { HiEye } from "react-icons/hi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { HiEyeOff } from "react-icons/hi"
import TitleSubtitle from "../common/TitleSubtitle"
import PrimaryButton from "../button/PrimaryButton"
import SecondaryButton from "../button/SecondaryButton"
import successIcon from "../../assets/success.svg"

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

// Componente auxiliar: Formulário de cadastro
const RegisterForm = () => (
    <form className="flex flex-col gap-2 flex-1">
        <InputLabel
            id="name"
            type="text"
            placeholder="Digite seu nome"
            leftIcon={<MdPerson size={20} />}
        />
        <InputLabel
            id="phone"
            type="text"
            placeholder="Digite seu telefone"
            leftIcon={<MdPhone size={20} />}
        />
        <InputLabel
            id="email"
            type="text"
            placeholder="Digite seu email"
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
        <InputLabel
            id="confirm-password"
            type="password"
            placeholder="Confirme sua senha"
            leftIcon={<MdLock size={20} />}
            rightIcon={<HiEye size={20} />}
            rightIconClosed={<HiEyeOff size={20} />}
        />
        <div className="text-[12px] text-gray-400 text-center">
            Ao se registrar, você concorda com os Termos de Serviço.
        </div>
    </form>
)

// Componente auxiliar: Conteúdo de registro
const RegisterContent = ({ 
    onComplete, 
    onSwitchToLogin 
}: { 
    onComplete: () => void; 
    onSwitchToLogin?: () => void;
}) => (
    <div className="flex flex-col flex-1 gap-2 sm:gap-3">
        <div className="mt-5 sm:mt-0">
            <ResponsiveTitle 
                title="CADASTRE-SE" 
                subtitle="Crie sua conta gratuita" 
            />
        </div>

        <RegisterForm />

    <div className="flex flex-col gap-2 sm:gap-3 sm:mt-auto">
            <PrimaryButton
                variant="primary"
                size="small"
                rightIcon={<MdOutlineKeyboardArrowRight />}
                onClick={onComplete}
            >
                CRIAR CONTA AGORA
            </PrimaryButton>
            <div className="text-xs sm:text-sm text-gray-400 text-center">
                Já possui conta?{' '}
                <button 
                    type="button"
                    onClick={() => onSwitchToLogin?.()}
                    className="text-green-400 hover:underline"
                >
                    Entre aqui
                </button>
            </div>
        </div>
    </div>
)

// Componente auxiliar: Tela de sucesso
const SuccessContent = () => (
    <div className="flex flex-col flex-1 gap-2 sm:gap-3 items-center w-full">
        <div className="flex flex-col gap-4 items-center">
            <img src={successIcon} alt="Success" width={64} />
            <ResponsiveTitle 
                title="CADASTRO CONCLUÍDO COM SUCESSO!" 
                subtitle="Bem-vindo à Trevo Club, onde a sorte é verde e o prêmio é real!" 
            />
        </div>
    <div className="flex flex-col gap-2 w-full sm:mt-auto">
            <PrimaryButton variant="primary" size="small" rightIcon={<MdOutlineKeyboardArrowRight />}>
                DEPOSITAR
            </PrimaryButton>
            <SecondaryButton variant="secondary" size="small" rightIcon={<MdOutlineKeyboardArrowRight />}>
                EXPLORAR JOGOS
            </SecondaryButton>
        </div>
    </div>
)

// Componente de modal de cadastro. Para abrir sem botão, controle externamente o estado 'open'
interface RegisterDialogProps {
    forceOpen?: boolean;
    defaultOpen?: boolean;
    hideTrigger?: boolean;
    onSwitchToLogin?: () => void;
}

export function RegisterDialog({ forceOpen = false, defaultOpen = false, hideTrigger = false, onSwitchToLogin }: RegisterDialogProps) {
    const [open, setOpen] = useState(false)
    // novo estado: concluiu cadastro
    const [completed, setCompleted] = useState(false)

    useEffect(() => { if (defaultOpen) setOpen(true) }, [defaultOpen])
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
            trigger={!hideTrigger ? <PrimaryButton variant="primary" size="small">CADASTRAR</PrimaryButton> : undefined}
        >
            <div className="flex flex-col sm:justify-between flex-1 gap-4">
                {!completed ? (
                    <RegisterContent 
                        onComplete={() => setCompleted(true)}
                        onSwitchToLogin={() => {
                            setOpen(false)
                            onSwitchToLogin?.()
                        }}
                    />
                ) : (
                    <SuccessContent />
                )}
            </div>
        </BaseAuthDialog>
    )
}