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
import { MdEmail, MdPerson, MdPhone } from "react-icons/md"
import { MdLock } from "react-icons/md"
import { HiEye } from "react-icons/hi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { HiEyeOff } from "react-icons/hi"
import TitleSubtitle from "../common/TitleSubtitle"
import PrimaryButton from "../button/primaryButton"
import SecondaryButton from "../button/secondaryButton"
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
    <form className="flex flex-col gap-2 flex-1 overflow-y-auto">
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
    <>
        <div className="mt-5 sm:mt-0">
            <ResponsiveTitle 
                title="CADASTRE-SE" 
                subtitle="Crie sua conta gratuita" 
            />
        </div>

        <RegisterForm />

        <div className="flex flex-col gap-2 sm:gap-3 pb-2 sm:pb-0">
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
    </>
)

// Componente auxiliar: Tela de sucesso
const SuccessContent = () => (
    <>
        <div className="flex flex-col gap-4 flex-1 justify-center sm:justify-start items-center">
            <img src={successIcon} alt="Success" width={64} />
            <ResponsiveTitle 
                title="CADASTRO CONCLUÍDO COM SUCESSO!" 
                subtitle="Bem-vindo à Trevo Club, onde a sorte é verde e o prêmio é real!" 
            />
        </div>
        <div className="flex flex-col gap-2 pb-2 sm:pb-0">
            <PrimaryButton variant="primary" size="small" rightIcon={<MdOutlineKeyboardArrowRight />}>
                DEPOSITAR
            </PrimaryButton>
            <SecondaryButton variant="secondary" size="small" rightIcon={<MdOutlineKeyboardArrowRight />}>
                EXPLORAR JOGOS
            </SecondaryButton>
        </div>
    </>
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
        <Dialog open={open} onOpenChange={setOpen}>
            {!hideTrigger && (
                <DialogTrigger asChild>
                    <PrimaryButton variant="primary" size="small">CADASTRAR</PrimaryButton>
                </DialogTrigger>
            )}

            <DialogContent showCloseButton={false}
                className="
                    max-w-none w-full h-full sm:w-[700px] sm:h-[600px] xl:w-[700px] xl:h-[600px]
                    p-0 overflow-hidden sm:rounded-2xl gap-10
                "
                style={{
                    borderColor: colors.border.slateBlue,
                    backgroundColor: colors.background.primary
                }}
            >
                <div className="flex flex-col sm:flex-row w-full h-full gap-2">
                    {/* Imagem - lado esquerdo apenas no desktop */}
                    <div
                        className="hidden sm:block sm:w-[44.28%] sm:h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${login})`
                        }}
                    />

                    {/* Formulário */}
                    <div className="w-full sm:w-[55.72%] text-white flex flex-col px-4 py-4 sm:px-8 sm:py-8 overflow-y-auto h-full gap-4">
                        {/* Logo + título */}
                        <HeaderDialog
                            onClose={() => setOpen(false)}
                        />
                        
                        {/* Imagem - abaixo do header apenas no mobile */}
                        <div className="flex flex-col flex-1 gap-4">
                            <div
                                className="w-full aspect-video sm:hidden bg-contain bg-center bg-no-repeat max-h-48"
                                style={{
                                    backgroundImage: `url(${loginMobile})`
                                }}
                            />

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
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}