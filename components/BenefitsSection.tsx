import React from "react";
import { Truck, ShieldCheck, Star } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-sky-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-600 mb-8">Beneficios de usar LavaMóvil</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold text-sky-600">Ahorro de Tiempo</h3>
            <p className="text-gray-600">Recogemos y entregamos tu ropa en menos de 48 horas.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold text-sky-600">Calidad Garantizada</h3>
            <p className="text-gray-600">Usamos productos de alta calidad para el cuidado de tus prendas.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold text-sky-600">Comodidad</h3>
            <p className="text-gray-600">Servicio a domicilio para que no tengas que preocuparte por nada.</p>
          </div>
          <div className="p-4 bg-white shadow rounded flex flex-col items-center">
            <Truck className="h-8 w-8 text-sky-600 mb-2" />
            <h3 className="text-xl font-semibold text-sky-600">Entrega Rápida</h3>
            <p className="text-gray-600">Garantizamos entregas rápidas y puntuales.</p>
          </div>
          <div className="p-4 bg-white shadow rounded flex flex-col items-center">
            <ShieldCheck className="h-8 w-8 text-sky-600 mb-2" />
            <h3 className="text-xl font-semibold text-sky-600">Seguridad</h3>
            <p className="text-gray-600">Tus prendas están en buenas manos con nosotros.</p>
          </div>
          <div className="p-4 bg-white shadow rounded flex flex-col items-center">
            <Star className="h-8 w-8 text-sky-600 mb-2" />
            <h3 className="text-xl font-semibold text-sky-600">Satisfacción Garantizada</h3>
            <p className="text-gray-600">Nos aseguramos de que quedes completamente satisfecho.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
