import '../styles/global.css';
import ExperienceItem from './ExperienceItem';

const EXPERIENCE = [
    {
        date: "2024 - Presente",
        title: "Fundador & Full Stack Developer - Roulyx.com",
        company: "Proyecto Personal",
        description:
            "Desarrollé desde cero una plataforma SaaS completa que democratiza el acceso a 40+ modelos de IA (GPT-4, Claude, Gemini, Grok) a través de una API unificada. Implementé routing inteligente basado en costo y rendimiento, dashboard con analíticas en tiempo real, sistema de facturación con Stripe, autenticación robusta y gestión de API keys. Stack: Next.js 14, TypeScript, Supabase, Tailwind CSS, Clerk Auth, Stripe. La plataforma está funcionando en modo test con planes escalables desde FREE hasta ENTERPRISE.",
    },
    {
        date: "Actualmente...",
        title: "Gestor de proyecto Corporate de Vodafone",
        company: "Instelca S.L.U",
        description:
            "Lideré y supervisé un equipo dinámico de más de 30 personas en proyectos de telecomunicaciones para grandes clientes como Vodafone, Mercadona, Dia, El Corte Inglés, Endesa, Junta de Andalucía, y la Comunidad Autónoma de la región de Murcia, asegurando la eficiencia operativa. Implementé prácticas de gestión de proyectos que mejoraron la eficiencia operativa en un 20%. Desarrollé estrategias de coordinación que redujeron los tiempos de respuesta a incidentes en un 30%.",
    },
    {
        date: "Junio 2014",
        title: "Técnico I+M y proyecto Corporate",
        company: "Instelca S.L.U",
        description:
            "Instalé y mantuve sistemas de telecomunicaciones y redes de datos, mejorando la conectividad y el rendimiento en un 15%. Desarrollé soluciones innovadoras para la optimización de redes, reduciendo las interrupciones del servicio en un 25%.",
    },
    {
        date: "Agosto 2009",
        title: "Administrador de franquicia",
        company: "APP Informática",
        description:
            "Gestioné operaciones diarias y aseguré la satisfacción del cliente, logrando un aumento del 10% en las ventas anuales.Implementé estrategias de marketing local que incrementaron la base de clientes en un 20%.",
    },
    {
        date: "Febrero 2008",
        title: "Inspector de obra",
        company: "Gas Natural Fenosa",
        description:
            "Realicé inspecciones en instalaciones para garantizar el cumplimiento de estándares de calidad y seguridad, mejorando la fiabilidad de los proyectos en un 10%.",
    },
];

const ExperienceList = () => {
    return (
        <div className="experience-list-container">
            <ol className="relative mt-16 space-y-72 md:space-y-28 lg:space-y-28 experience-list">
                {EXPERIENCE.concat(EXPERIENCE).map((experience, index) => (
                    <li key={index} className="experience-item">
                        <ExperienceItem {...experience} />
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ExperienceList;
