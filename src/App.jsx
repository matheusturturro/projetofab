import home from './content/home.json';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Steps from './components/Steps';
import Program from './components/Program';
import Cases from './components/Cases';
import Offer from './components/Offer';
import Pricing from './components/Pricing';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header data={home.header} />
      <main>
        <Hero data={home.hero} />
        {home.sections.map((section) => {
          switch (section.id) {
            case 'beneficios':
              return <Benefits key={section.id} data={section} />;
            case 'como-funciona':
              return <Steps key={section.id} data={section} />;
            case 'programa':
              return <Program key={section.id} data={section} />;
            case 'cases':
              return <Cases key={section.id} data={section} />;
            case 'oferta':
              return <Offer key={section.id} data={section} />;
            case 'planos':
              return <Pricing key={section.id} data={section} />;
            case 'instrutor':
              return <Instructor key={section.id} data={section} />;
            case 'depoimentos':
              return <Testimonials key={section.id} data={section} />;
            case 'faq':
              return <FAQ key={section.id} data={section} />;
            case 'cta-final':
              return <CTAFinal key={section.id} data={section} />;
            case 'lead':
              return <LeadMagnet key={section.id} data={section} />;
            default:
              return null;
          }
        })}
      </main>
      <Footer data={home.footer} />
    </>
  );
}
