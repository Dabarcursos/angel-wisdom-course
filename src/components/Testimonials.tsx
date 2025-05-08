
const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Aparecida",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "Esse curso me fez enxergar os anjos de outra forma! Agora entendo muito melhor o papel deles no plano de Deus e sua presença em minha vida. A forma como o professor Edinei explica torna tudo mais claro."
    },
    {
      name: "João Paulo",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "Sempre tive curiosidade sobre os anjos, mas havia muita confusão em minha mente. Este curso trouxe clareza e base doutrinária sólida para entender o papel dos anjos na nossa fé católica. Recomendo a todos!"
    },
    {
      name: "Carlos Eduardo",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "A profundidade teológica e a simplicidade na explicação são impressionantes. O professor consegue tornar acessível um tema tão profundo da nossa fé. Minha devoção ao anjo da guarda cresceu muito!"
    }
  ];

  return (
    <section className="py-16 bg-angel-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-angel-primary">
            O Que Nossos Alunos Dizem
          </h2>
          <div className="w-24 h-1 bg-angel-gold mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-angel-gold">★</span>
                ))}
              </div>
              
              <p className="italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
