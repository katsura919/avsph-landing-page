import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FAQSection from "../../components/FAQSection";
import ComparisonSection from "../../components/ComparisonSection";

export default function FAQsPage() {
  return (
    <>
      <Header />
      <main>
        <ComparisonSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
