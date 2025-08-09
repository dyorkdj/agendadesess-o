import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import oceanWaves from './assets/ocean_waves_background.webp'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState(1)
  const [formData, setFormData] = useState({
    problems: [],
    solution: '',
    name: '',
    whatsapp: '',
    day: '',
    time: '',
    doubt: '',
    customDoubt: ''
  })

  const nextSection = () => {
    setCurrentSection(prev => prev + 1)
  }

  const prevSection = () => {
    setCurrentSection(prev => prev - 1)
  }

  const goToSection = (section) => {
    setCurrentSection(section)
  }

  const handleProblemChange = (problem, checked) => {
    setFormData(prev => ({
      ...prev,
      problems: checked 
        ? [...prev.problems, problem]
        : prev.problems.filter(p => p !== problem)
    }))
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const renderSection1 = () => (
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        ✨ E se oque você procura não estivesse fora, mas dentro de você?
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Vivemos em um mundo que exige mais conquistas, mais metas, mais velocidade.
      </p>
      <Button 
        onClick={nextSection}
        className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-lg text-lg font-medium"
      >
        Clique aqui <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  )

  const renderSection2 = () => (
    <div className="text-center space-y-6">
      <Button 
        onClick={prevSection}
        variant="outline"
        className="mb-4 self-start"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Mas a verdadeira transformação começa quando você silencia o barulho externo e escuta sua própria verdade.
      </h2>
      
      <p className="text-lg text-gray-600 mb-4">
        Eu sou <strong>Gustavo Quinot</strong>, um guia e facilitador de processos de cura emocional. 
        Quero caminhar ao seu lado nessa jornada de clareza, reconexão e paz interior.
      </p>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="text-yellow-800">
          💡 <strong>Vagas desta semana quase completas</strong> — garanta a sua agora.
        </p>
      </div>
      
      <Button 
        onClick={nextSection}
        className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-lg text-lg font-medium"
      >
        Quero começar minha transformação agora <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  )

  const renderSection3 = () => (
    <div className="space-y-6">
      <Button 
        onClick={prevSection}
        variant="outline"
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          🌀 Vamos descobrir juntos o que hoje está te travando
        </h2>
        <p className="text-lg text-gray-600">
          Para saber qual o caminho mais seguro para você, precisamos primeiro entender com clareza 
          o que hoje está te impedindo de seguir em frente.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">💔 Relacionamentos e Coração</h3>
          <div className="space-y-3">
            {[
              "Sinto que sempre me doo demais e nunca recebo de volta.",
              "Acabei de sair de um relacionamento e estou perdido(a)."
            ].map((problem) => (
              <div key={problem} className="flex items-center space-x-2">
                <Checkbox 
                  id={problem}
                  checked={formData.problems.includes(problem)}
                  onCheckedChange={(checked) => handleProblemChange(problem, checked)}
                />
                <Label htmlFor={problem} className="text-gray-700">{problem}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">😞 Ansiedade, medo e mente agitada</h3>
          <div className="space-y-3">
            {[
              "Acordo todos os dias com um aperto no peito.",
              "Minha mente não para, não consigo ter paz."
            ].map((problem) => (
              <div key={problem} className="flex items-center space-x-2">
                <Checkbox 
                  id={problem}
                  checked={formData.problems.includes(problem)}
                  onCheckedChange={(checked) => handleProblemChange(problem, checked)}
                />
                <Label htmlFor={problem} className="text-gray-700">{problem}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🧱 Bloqueios e falta de propósito</h3>
          <div className="space-y-3">
            {[
              "Tenho tudo para estar bem, mas me sinto vazio(a).",
              "Sigo repetindo os mesmos padrões e erros."
            ].map((problem) => (
              <div key={problem} className="flex items-center space-x-2">
                <Checkbox 
                  id={problem}
                  checked={formData.problems.includes(problem)}
                  onCheckedChange={(checked) => handleProblemChange(problem, checked)}
                />
                <Label htmlFor={problem} className="text-gray-700">{problem}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🧘‍♂️ Autoconhecimento e busca espiritual</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="spiritual"
                checked={formData.problems.includes("Sinto que minha alma está gritando por algo novo, mas não entendo o quê.")}
                onCheckedChange={(checked) => handleProblemChange("Sinto que minha alma está gritando por algo novo, mas não entendo o quê.", checked)}
              />
              <Label htmlFor="spiritual" className="text-gray-700">
                Sinto que minha alma está gritando por algo novo, mas não entendo o quê.
              </Label>
            </div>
          </div>
        </div>
      </div>

      <Button 
        onClick={nextSection}
        className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg text-lg font-medium mt-8"
      >
        Continuar <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  )

  const renderSection4 = () => (
    <div className="space-y-6">
      <Button 
        onClick={prevSection}
        variant="outline"
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          🎁 O que você mais precisa neste momento?
        </h2>
        <p className="text-lg text-gray-600">
          Escolha o que mais ressoa com o seu momento e descubra o caminho para a sua transformação:
        </p>
      </div>

      <RadioGroup 
        value={formData.solution} 
        onValueChange={(value) => handleInputChange('solution', value)}
        className="space-y-4"
      >
        {[
          { value: "clareza", label: "Clareza: enxergar seu propósito e o caminho a seguir." },
          { value: "acolhimento", label: "Acolhimento: encontrar um porto seguro e curar feridas." },
          { value: "direcao", label: "Direção: traçar seu rumo com confiança." },
          { value: "paz", label: "Paz interior: silenciar o caos e se reconectar com a sua essência." }
        ].map((option) => (
          <div key={option.value} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value} className="text-gray-700 cursor-pointer flex-1">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <Button 
        onClick={nextSection}
        className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg text-lg font-medium mt-8"
        disabled={!formData.solution}
      >
        Ver meu caminho <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  )

  const renderSection5 = () => (
    <div className="space-y-6">
      <Button 
        onClick={prevSection}
        variant="outline"
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          ✨ Eu sei como é carregar esse peso todos os dias.
        </h2>
        <p className="text-xl text-gray-700">
          Mas também sei como é sentir a leveza de reencontrar seu centro.
        </p>
        
        <p className="text-lg text-gray-600">
          Já ajudei muitas pessoas a saírem do bloqueio e voltarem a sentir sentido e alegria na vida.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            📢 Depoimentos reais:
          </h3>
          <div className="space-y-4 text-left">
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
              "Depois da primeira sessão, senti como se tirassem um peso das minhas costas." — Ana M.
            </blockquote>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
              "Foi como se eu tivesse encontrado respostas que eu procurava há anos." — Rodrigo F.
            </blockquote>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
              "Me senti acolhida e segura para me abrir sem medo." — Carla S.
            </blockquote>
          </div>
        </div>
        
        <Button 
          onClick={nextSection}
          className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-lg text-lg font-medium"
        >
          Quero dar meu próximo passo <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )

  const renderSection6 = () => (
    <div className="space-y-6">
      <Button 
        onClick={prevSection}
        variant="outline"
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          ✨ Sua transformação começa agora.
        </h2>
        
        <p className="text-lg text-gray-600">
          Vamos agendar sua primeira <strong>Sessão de Guiância Espiritual</strong> — um aconselhamento profundo para clareza, direção e cura emocional.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg space-y-3">
          <p className="text-gray-700">📅 <strong>Duração:</strong> 1 hora (chamada de áudio ou vídeo)</p>
          <p className="text-gray-700">⚡ <strong>Primeira sessão:</strong> você já sai com mais clareza, leveza emocional e um passo concreto para seguir</p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-red-800">
            Atendo apenas <strong>5 pessoas por semana</strong> — garanta sua vaga antes que a agenda feche.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={nextSection}
            className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg text-lg font-medium"
          >
            Agendar minha sessão agora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            onClick={() => goToSection(9)}
            variant="outline"
            className="w-full py-3 rounded-lg text-lg font-medium"
          >
            Tenho dúvidas, quero entender melhor
          </Button>
        </div>
      </div>
    </div>
  )

  const renderSection7 = () => (
    <div className="space-y-6">
      <Button 
        onClick={prevSection}
        variant="outline"
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Preencha para confirmar seu agendamento:
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-lg font-medium text-gray-700">
            Qual seu nome completo?
          </Label>
          <Input
            id="name"
            placeholder="Ex: Gustavo Quinot"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="whatsapp" className="text-lg font-medium text-gray-700">
            Qual seu WhatsApp com DDD?
          </Label>
          <Input
            id="whatsapp"
            placeholder="Ex: 41 998752918"
            value={formData.whatsapp}
            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="day" className="text-lg font-medium text-gray-700">
            Selecione o dia de preferência
          </Label>
          <Select value={formData.day} onValueChange={(value) => handleInputChange('day', value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Escolha um dia" />
            </SelectTrigger>
            <SelectContent>
              {['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'].map((day) => (
                <SelectItem key={day} value={day}>{day}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="time" className="text-lg font-medium text-gray-700">
            Horário
          </Label>
          <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Escolha um horário" />
            </SelectTrigger>
            <SelectContent>
              {['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        onClick={nextSection}
        className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg text-lg font-medium mt-8"
        disabled={!formData.name || !formData.whatsapp || !formData.day || !formData.time}
      >
        Estou pronto(a) para meu próximo passo <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  )

  const renderSection8 = () => (
    <div className="space-y-6">
      <Button 
        onClick={prevSection}
        variant="outline"
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          🎉 Parabéns! Você deu um passo gigante para reencontrar sua essência.
        </h2>
        
        <p className="text-lg text-gray-600">
          Estarei em contato pelo WhatsApp em até 24 horas para confirmarmos tudo.
        </p>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <p className="text-green-800 font-medium mb-4">
            "Já me manda um 'oi' no WhatsApp agora — assim já nos conectamos e posso te enviar algo especial antes da sua sessão."
          </p>
          
          <div className="space-y-2">
            <p className="text-gray-700">📷 <strong>Instagram:</strong> @gustavoquinot</p>
            <p className="text-gray-700">📲 <strong>WhatsApp:</strong> (41) 99875-2918</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSection9 = () => (
    <div className="space-y-6">
      <Button 
        onClick={() => goToSection(6)}
        variant="outline"
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          ❓ Preencha para que eu possa responder pessoalmente:
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Preencha e eu responderei pessoalmente para que você tenha clareza e segurança antes de dar o próximo passo.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="doubt-name" className="text-lg font-medium text-gray-700">
            Qual seu nome completo?
          </Label>
          <Input
            id="doubt-name"
            placeholder="Ex: Gustavo Quinot"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="doubt-whatsapp" className="text-lg font-medium text-gray-700">
            Qual seu WhatsApp com DDD?
          </Label>
          <Input
            id="doubt-whatsapp"
            placeholder="Ex: 41 998752918"
            value={formData.whatsapp}
            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label className="text-lg font-medium text-gray-700">
            Qual é a sua dúvida principal?
          </Label>
          <RadioGroup 
            value={formData.doubt} 
            onValueChange={(value) => handleInputChange('doubt', value)}
            className="mt-4 space-y-3"
          >
            {[
              "Como funciona a sessão de guiança?",
              "Tenho dúvidas se este processo é realmente para mim ou se conseguirei me abrir.",
              "O que acontece exatamente durante a sessão?",
              "Como posso me preparar para a sessão?",
              "Quero entender melhor como a guiança pode me ajudar especificamente no que estou vivendo",
              "Tenho receio de não conseguir me conectar. Isso é uma pressão comum?",
              "Tenho outra dúvida"
            ].map((doubt) => (
              <div key={doubt} className="flex items-start space-x-2">
                <RadioGroupItem value={doubt} id={doubt} className="mt-1" />
                <Label htmlFor={doubt} className="text-gray-700 cursor-pointer">
                  {doubt}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          {formData.doubt === "Tenho outra dúvida" && (
            <div className="mt-4">
              <Label htmlFor="custom-doubt" className="text-lg font-medium text-gray-700">
                Por favor, descreva sua dúvida:
              </Label>
              <Textarea
                id="custom-doubt"
                placeholder="Descreva sua dúvida aqui..."
                value={formData.customDoubt}
                onChange={(e) => handleInputChange('customDoubt', e.target.value)}
                className="mt-2"
              />
            </div>
          )}
        </div>
      </div>

      <Button 
        onClick={nextSection}
        className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg text-lg font-medium mt-8"
        disabled={!formData.name || !formData.whatsapp || !formData.doubt}
      >
        Enviar dúvida! <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  )

  const renderSection10 = () => (
    <div className="space-y-6">
      <Button 
        onClick={prevSection}
        variant="outline"
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>
      
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          ✅ Sua dúvida foi recebida com carinho!
        </h2>
        
        <p className="text-lg text-gray-600">
          Entender antes de agir é um sinal de sabedoria.
        </p>
        
        <p className="text-lg text-gray-600">
          Eu vou responder pessoalmente pelo WhatsApp para garantir que você tenha clareza, segurança e tranquilidade antes de dar o próximo passo.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-blue-800 font-medium mb-4">
            Enquanto isso, você já pode se aprofundar e sentir um pouco do que será essa jornada:
          </p>
          
          <div className="space-y-2">
            <p className="text-gray-700">📷 <strong>Instagram:</strong> @gustavoquinot</p>
            <p className="text-gray-700">▶️ <strong>Youtube:</strong> https://www.youtube.com/@Gustavoquinot1</p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800">
          ✨ E se oque você procura não estivesse fora, mas dentro de você?
        </h3>
      </div>
    </div>
  )

  const renderCurrentSection = () => {
    switch(currentSection) {
      case 1: return renderSection1()
      case 2: return renderSection2()
      case 3: return renderSection3()
      case 4: return renderSection4()
      case 5: return renderSection5()
      case 6: return renderSection6()
      case 7: return renderSection7()
      case 8: return renderSection8()
      case 9: return renderSection9()
      case 10: return renderSection10()
      default: return renderSection1()
    }
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${oceanWaves})` }}
    >
      <div className="min-h-screen bg-black bg-opacity-20 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white bg-opacity-95 backdrop-blur-sm">
          <CardContent className="p-8">
            {renderCurrentSection()}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App

