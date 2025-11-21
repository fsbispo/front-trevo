import PrincipalButton from '../components/button/PrimaryButton';
import SecondaryButton from '../components/button/SecondaryButton';
import InputLabel from '../components/form/InputLabel';
import TitleSubtitle from '../components/common/TitleSubtitle';
import CarouselSection from '../components/carousel/CarouselSection';
import TodayPaidCard from '../components/cards/TodayPaidCard';
import WinnerCard from '../components/cards/WinnerCard';
import { 
  Play, 
  Download, 
  Edit, 
  Trash2, 
  Plus,
  Search,
  Heart,
  Share2,
  Settings,
  User,
  Mail,
  Lock,
  AtSign,
} from 'lucide-react';

export default function Components() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <p className="text-gray-400 text-lg">Biblioteca de componentes do sistema</p>
      </div>

      <div className="space-y-12">
        {/* Carrosséis */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Carrosséis
          </h2>
          <div className="space-y-6">
            <CarouselSection title="Pagou hoje">
              {Array.from({ length: 8 }).map((_, i) => (
                <TodayPaidCard key={i} game="Plinko X" amount="R$11.500.000,00" />
              ))}
            </CarouselSection>

            <CarouselSection title="Ganhadores recentes">
              {Array.from({ length: 8 }).map((_, i) => (
                <WinnerCard key={i} name="Ryan Kenter" game="Plinko X" amount="R$150,00" />
              ))}
            </CarouselSection>
          </div>
        </section>
        {/* Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Botões - Variantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Primary</h3>
              <div className="space-y-3">
                <PrincipalButton variant="primary" size="small">
                  BOTÃO
                </PrincipalButton>
                <PrincipalButton variant="primary" size="medium">
                  BOTÃO
                </PrincipalButton>
                <PrincipalButton variant="primary" size="large">
                  BOTÃO
                </PrincipalButton>
              </div>
            </div>

            {/* Accent Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Spring Green</h3>
              <div className="space-y-3">
                <PrincipalButton variant="springGreen" size="small">
                  BOTÃO
                </PrincipalButton>
                <PrincipalButton variant="springGreen" size="medium">
                  BOTÃO
                </PrincipalButton>
                <PrincipalButton variant="springGreen" size="large">
                  BOTÃO
                </PrincipalButton>
              </div>
            </div>

            {/* Pigment Green Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Pigment Green</h3>
              <div className="space-y-3">
                <PrincipalButton variant="pigmentGreen" size="small">
                  BOTÃO
                </PrincipalButton>
                <PrincipalButton variant="pigmentGreen" size="medium">
                  BOTÃO
                </PrincipalButton>
                <PrincipalButton variant="pigmentGreen" size="large">
                  BOTÃO
                </PrincipalButton>
              </div>
            </div>

            {/* Disabled Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Disabled</h3>
              <div className="space-y-3">
                <PrincipalButton disabled size="small">
                  BOTÃO
                </PrincipalButton>
                <PrincipalButton disabled size="medium">
                  BOTÃO
                </PrincipalButton>
                <PrincipalButton disabled size="large">
                  BOTÃO
                </PrincipalButton>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Botões Secundários - Variantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gunmetal Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Secundario</h3>
              <div className="space-y-3">
                <SecondaryButton variant="secondary" size="small">
                  BOTÃO
                </SecondaryButton>
                <SecondaryButton variant="secondary" size="medium">
                  BOTÃO
                </SecondaryButton>
                <SecondaryButton variant="secondary" size="large">
                  BOTÃO
                </SecondaryButton>
              </div>
            </div>

            {/* Spring Green Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Secundary variant</h3>
              <div className="space-y-3">
                <SecondaryButton variant="secondaryGradiant" size="small">
                  BOTÃO
                </SecondaryButton>
                <SecondaryButton variant="secondaryGradiant" size="medium">
                  BOTÃO
                </SecondaryButton>
                <SecondaryButton variant="secondaryGradiant" size="large">
                  BOTÃO
                </SecondaryButton>
              </div>
            </div>

            {/* Pigment Green Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Pigment Green</h3>
              <div className="space-y-3">
                <SecondaryButton variant="secondaryNeon" size="small">
                  BOTÃO
                </SecondaryButton>
                <SecondaryButton variant="secondaryNeon" size="medium">
                  BOTÃO
                </SecondaryButton>
                <SecondaryButton variant="secondaryNeon" size="large">
                  BOTÃO
                </SecondaryButton>
              </div>
            </div>

            {/* Disabled Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Disabled</h3>
              <div className="space-y-3">
                <SecondaryButton disabled size="small">
                  BOTÃO
                </SecondaryButton>
                <SecondaryButton disabled size="medium">
                  BOTÃO
                </SecondaryButton>
                <SecondaryButton disabled size="large">
                  BOTÃO
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Buttons with Icons */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Botões Primários com Ícones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Left Icon */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Ícone à Esquerda</h3>
              <div className="space-y-3">
                <PrincipalButton variant="primary" leftIcon={<Play />}>
                  EXECUTAR
                </PrincipalButton>
                <PrincipalButton variant="springGreen" leftIcon={<Plus />}>
                  ADICIONAR
                </PrincipalButton>
                <PrincipalButton variant="pigmentGreen" leftIcon={<Search />}>
                  BUSCAR
                </PrincipalButton>
              </div>
            </div>

            {/* Right Icon */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Ícone à Direita</h3>
              <div className="space-y-3">
                <PrincipalButton variant="primary" rightIcon={<Download />}>
                  BAIXAR
                </PrincipalButton>
                <PrincipalButton variant="springGreen" rightIcon={<Share2 />}>
                  COMPARTILHAR
                </PrincipalButton>
                <PrincipalButton variant="pigmentGreen" rightIcon={<Settings />}>
                  CONFIGURAR
                </PrincipalButton>
              </div>
            </div>

            {/* Both Icons */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Ambos os Lados</h3>
              <div className="space-y-3">
                <PrincipalButton variant="primary" leftIcon={<User />} rightIcon={<Mail />}>
                  USUÁRIO
                </PrincipalButton>
                <PrincipalButton variant="springGreen" leftIcon={<Heart />} rightIcon={<Share2 />}>
                  FAVORITAR
                </PrincipalButton>
                <PrincipalButton variant="pigmentGreen" leftIcon={<Edit />} rightIcon={<Trash2 />}>
                  EDITAR
                </PrincipalButton>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Buttons with Icons */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Botões Secundários com Ícones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Left Icon */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Ícone à Esquerda</h3>
              <div className="space-y-3">
                <SecondaryButton variant="secondary" leftIcon={<Play />}>
                  EXECUTAR
                </SecondaryButton>
                <SecondaryButton variant="secondaryGradiant" leftIcon={<Plus />}>
                  ADICIONAR
                </SecondaryButton>
                <SecondaryButton variant="secondaryNeon" leftIcon={<Search />}>
                  BUSCAR
                </SecondaryButton>
              </div>
            </div>

            {/* Right Icon */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Ícone à Direita</h3>
              <div className="space-y-3">
                <SecondaryButton variant="secondary" rightIcon={<Download />}>
                  BAIXAR
                </SecondaryButton>
                <SecondaryButton variant="secondaryGradiant" rightIcon={<Share2 />}>
                  COMPARTILHAR
                </SecondaryButton>
                <SecondaryButton variant="secondaryNeon" rightIcon={<Settings />}>
                  CONFIGURAR
                </SecondaryButton>
              </div>
            </div>

            {/* Both Icons */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Ambos os Lados</h3>
              <div className="space-y-3">
                <SecondaryButton variant="secondary" leftIcon={<User />} rightIcon={<Mail />}>
                  USUÁRIO
                </SecondaryButton>
                <SecondaryButton variant="secondaryGradiant" leftIcon={<Heart />} rightIcon={<Share2 />}>
                  FAVORITAR
                </SecondaryButton>
                <SecondaryButton variant="secondaryNeon" leftIcon={<Edit />} rightIcon={<Trash2 />}>
                  EDITAR
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* Input Label Variants */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Input Label - Variantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Default Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Default</h3>
              <div className="space-y-3">
                <InputLabel
                  label="Nome"
                  id="default-1"
                  placeholder="Digite seu nome"
                  variant="default"
                />
                <InputLabel
                  label="Email"
                  id="default-2"
                  placeholder="Digite seu email"
                  variant="default"
                  leftIcon={<AtSign size={20} />}
                />
              </div>
            </div>

            {/* Primary Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Primary</h3>
              <div className="space-y-3">
                <InputLabel
                  label="Usuário"
                  id="primary-1"
                  placeholder="Digite seu usuário"
                  variant="primary"
                  leftIcon={<User size={20} />}
                />
                <InputLabel
                  label="Senha"
                  id="primary-2"
                  type="password"
                  placeholder="Digite sua senha"
                  variant="primary"
                  leftIcon={<Lock size={20} />}
                />
              </div>
            </div>

            {/* Secondary Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Secondary</h3>
              <div className="space-y-3">
                <InputLabel
                  label="Buscar"
                  id="secondary-1"
                  placeholder="Pesquisar..."
                  variant="secondary"
                  leftIcon={<Search size={20} />}
                />
                <InputLabel
                  label="Filtro"
                  id="secondary-2"
                  placeholder="Filtrar resultados"
                  variant="secondary"
                />
              </div>
            </div>

            {/* Success Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Success</h3>
              <div className="space-y-3">
                <InputLabel
                  label="Email Confirmado"
                  id="success-1"
                  placeholder="usuario@exemplo.com"
                  variant="success"
                  leftIcon={<Mail size={20} />}
                />
                <InputLabel
                  label="Validado"
                  id="success-2"
                  placeholder="Campo validado"
                  variant="success"
                />
              </div>
            </div>

            {/* Warning Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Warning</h3>
              <div className="space-y-3">
                <InputLabel
                  label="Atenção"
                  id="warning-1"
                  placeholder="Verificar campo"
                  variant="warning"
                />
                <InputLabel
                  label="Validação Pendente"
                  id="warning-2"
                  placeholder="Aguardando confirmação"
                  variant="warning"
                />
              </div>
            </div>

            {/* Error Variant */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Error</h3>
              <div className="space-y-3">
                <InputLabel
                  label="Email Inválido"
                  id="error-1"
                  placeholder="usuario@exemplo.com"
                  variant="error"
                  leftIcon={<Mail size={20} />}
                />
                <InputLabel
                  label="Campo Obrigatório"
                  id="error-2"
                  placeholder="Preencha este campo"
                  variant="error"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Input Label as TextArea */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Input Label - TextArea
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Default TextArea */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Default TextArea</h3>
              <InputLabel
                label="Descrição"
                id="textarea-1"
                placeholder="Digite sua mensagem..."
                variant="default"
                isTextArea
                rows={4}
              />
            </div>

            {/* Primary TextArea */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Primary TextArea</h3>
              <InputLabel
                label="Comentários"
                id="textarea-2"
                placeholder="Deixe seu comentário..."
                variant="primary"
                isTextArea
                rows={4}
                leftIcon={<Edit size={20} />}
              />
            </div>

            {/* Success TextArea */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Success TextArea</h3>
              <InputLabel
                label="Mensagem Enviada"
                id="textarea-3"
                placeholder="Sua mensagem foi enviada com sucesso!"
                variant="success"
                isTextArea
                rows={4}
              />
            </div>

            {/* Error TextArea */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Error TextArea</h3>
              <InputLabel
                label="Campo Inválido"
                id="textarea-4"
                placeholder="Este campo contém erros"
                variant="error"
                isTextArea
                rows={4}
              />
            </div>
          </div>
        </section>

        {/* Title and Subtitle Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Título e Subtítulo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Only Title */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Apenas Título</h3>
              <TitleSubtitle title="RECUPERE SUA SENHA" />
            </div>

            {/* Only Subtitle */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-300 mb-4">Apenas Subtítulo</h3>
              <TitleSubtitle subtitle="Digite o e-mail cadastrado e enviaremos um link para redefinir sua senha." />
            </div>

            {/* Both Title and Subtitle */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700 md:col-span-2">
              <h3 className="font-medium text-gray-300 mb-4">Título e Subtítulo</h3>
              <TitleSubtitle 
                title="RECUPERE SUA SENHA" 
                subtitle="Digite o e-mail cadastrado e enviaremos um link para redefinir sua senha."
              />
            </div>

            {/* Another Example */}
            <div className="bg-slate-800 p-6 rounded-lg border border-gray-700 md:col-span-2">
              <h3 className="font-medium text-gray-300 mb-4">Outro Exemplo</h3>
              <TitleSubtitle 
                title="BEM-VINDO AO SISTEMA" 
                subtitle="Gerencie suas informações de forma simples e eficiente. Acesse as funcionalidades através do menu lateral."
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
