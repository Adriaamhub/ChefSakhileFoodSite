export default function Testimonials() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl shadow-sm">
          <p>"Amazing food and fast delivery!"</p>
          <h4 className="mt-4 font-semibold">Majeme Ntlangoti</h4>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <p>"Best restaurant experience ever."</p>
          <h4 className="mt-4 font-semibold">Koketso Motileng</h4>
        </div>
      </div>
    </section>
  );
}