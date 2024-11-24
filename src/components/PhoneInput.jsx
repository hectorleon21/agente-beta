import React, { useState } from 'react';
import { ChevronDown, Phone, HeadsetIcon, Users2, ShoppingBag } from 'lucide-react';
import { DiegoAvatar } from './avatars/DiegoAvatar';

const countryCodes = [
  // América del Sur
  {
    code: '+54',
    country: 'Argentina',
    acronym: 'AR',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#74ACDF"/><rect y="8" width="36" height="8" fill="#fff"/><circle cx="18" cy="12" r="4" fill="#F6B40E"/></svg>
  },
  {
    code: '+591',
    country: 'Bolivia',
    acronym: 'BO',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="8" fill="#D52B1E"/><rect y="8" width="36" height="8" fill="#F9E300"/><rect y="16" width="36" height="8" fill="#007934"/></svg>
  },
  {
    code: '+56',
    country: 'Chile',
    acronym: 'CL',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><rect y="12" width="36" height="12" fill="#D52B1E"/><rect width="12" height="12" fill="#0039A6"/><path d="M6,3 L6,9 L3,6 L9,6 L6,3" fill="#fff"/></svg>
  },
  {
    code: '+57',
    country: 'Colombia',
    acronym: 'CO',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="12" fill="#FCD116"/><rect y="12" width="36" height="6" fill="#003893"/><rect y="18" width="36" height="6" fill="#CE1126"/></svg>
  },
  {
    code: '+593',
    country: 'Ecuador',
    acronym: 'EC',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="12" fill="#FFD100"/><rect y="12" width="36" height="6" fill="#0148A4"/><rect y="18" width="36" height="6" fill="#D90012"/></svg>
  },
  {
    code: '+595',
    country: 'Paraguay',
    acronym: 'PY',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="8" fill="#D80027"/><rect y="8" width="36" height="8" fill="#fff"/><rect y="16" width="36" height="8" fill="#0052B4"/></svg>
  },
  {
    code: '+51',
    country: 'Perú',
    acronym: 'PE',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="12" height="24" fill="#D91023"/><rect x="12" width="12" height="24" fill="#fff"/><rect x="24" width="12" height="24" fill="#D91023"/></svg>
  },
  {
    code: '+598',
    country: 'Uruguay',
    acronym: 'UY',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><rect y="4" width="36" height="4" fill="#0038A8"/><rect y="12" width="36" height="4" fill="#0038A8"/><rect y="20" width="36" height="4" fill="#0038A8"/><rect width="18" height="12" fill="#FCD116"/><circle cx="9" cy="6" r="3" fill="#FCAD56"/></svg>
  },
  {
    code: '+58',
    country: 'Venezuela',
    acronym: 'VE',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="8" fill="#FFCE00"/><rect y="8" width="36" height="8" fill="#0033A0"/><rect y="16" width="36" height="8" fill="#EF3340"/></svg>
  },
  // América Central y Caribe
  {
    code: '+506',
    country: 'Costa Rica',
    acronym: 'CR',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><rect y="4" width="36" height="16" fill="#002B7F"/><rect y="8" width="36" height="8" fill="#CE1126"/></svg>
  },
  {
    code: '+53',
    country: 'Cuba',
    acronym: 'CU',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><rect y="4" width="36" height="4" fill="#002A8F"/><rect y="12" width="36" height="4" fill="#002A8F"/><rect y="20" width="36" height="4" fill="#002A8F"/><path d="M0,0 L18,12 L0,24 Z" fill="#CF142B"/></svg>
  },
  {
    code: '+503',
    country: 'El Salvador',
    acronym: 'SV',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#0F47AF"/><rect y="8" width="36" height="8" fill="#fff"/></svg>
  },
  {
    code: '+502',
    country: 'Guatemala',
    acronym: 'GT',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><rect width="12" height="24" fill="#4997D0"/><rect x="24" width="12" height="24" fill="#4997D0"/></svg>
  },
  {
    code: '+504',
    country: 'Honduras',
    acronym: 'HN',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><rect y="8" width="36" height="8" fill="#0073CF"/><rect y="0" width="36" height="8" fill="#0073CF"/></svg>
  },
  {
    code: '+52',
    country: 'México',
    acronym: 'MX',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="12" height="24" fill="#006847"/><rect x="12" width="12" height="24" fill="#fff"/><rect x="24" width="12" height="24" fill="#CE1126"/></svg>
  },
  {
    code: '+505',
    country: 'Nicaragua',
    acronym: 'NI',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><rect y="0" width="36" height="8" fill="#0067C6"/><rect y="16" width="36" height="8" fill="#0067C6"/></svg>
  },
  {
    code: '+507',
    country: 'Panamá',
    acronym: 'PA',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><rect width="18" height="12" fill="#DA121A"/><rect x="18" y="12" width="18" height="12" fill="#072B5F"/></svg>
  },
  // Europa y África
  {
    code: '+34',
    country: 'España',
    acronym: 'ES',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" fill="#C60B1E"/><rect y="6" width="36" height="12" fill="#FFC400"/></svg>
  },
  {
    code: '+240',
    country: 'Guinea Ecuatorial',
    acronym: 'GQ',
    flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="8" fill="#3E9A00"/><rect y="8" width="36" height="8" fill="#fff"/><rect y="16" width="36" height="8" fill="#E32118"/><rect width="12" height="24" fill="#0073CE"/></svg>
  }
].sort((a, b) => a.country.localeCompare(b.country));

const roles = [
  {
    id: 'sales',
    title: 'Ejecutivo de Ventas',
    icon: <ShoppingBag className="w-8 h-8 text-blue-500" />,
    description: 'Experto en ventas y negociación'
  },
  {
    id: 'support',
    title: 'Soporte Técnico',
    icon: <HeadsetIcon className="w-8 h-8 text-green-500" />,
    description: 'Especialista en resolución de problemas técnicos'
  },
  {
    id: 'customer',
    title: 'Analista Documental',
    icon: <Users2 className="w-8 h-8 text-purple-500" />,
    description: 'Especialista en gestión y análisis de documentos'
  }
];

const employeeAvatars = [
// Ventas
{
    id: 's1',
    name: 'Diego',
    experience: '5 años',
    photo: '/avatars/diego.jpg',
    speciality: 'Ventas B2B'
  },
  {
    id: 's2',
    name: 'Lucía',
    experience: '4 años',
    photo: '/avatars/lucia.jpg',
    speciality: 'Ventas Consultivas'
  },
  // Soporte Técnico
  {
    id: 't1',
    name: 'Manuel',
    experience: '3 años',
    photo: '/avatars/manuel.jpg',
    speciality: 'Software & Apps'
  },
  {
    id: 't2',
    name: 'Carmen',
    experience: '5 años',
    photo: '/avatars/carmen.jpg',
    speciality: 'Redes & Sistemas'
  },
  // Analista Documental
  {
    id: 'c1',
    name: 'Isabel',
    experience: '4 años',
    photo: '/avatars/isabel.jpg',
    speciality: 'Análisis de Contratos'
  },
  {
    id: 'c2',
    name: 'Miguel',
    experience: '3 años',
    photo: '/avatars/miguel.jpg',
    speciality: 'Gestión Documental'
  }
];

const PhoneInput = () => {
const [fullName, setFullName] = useState('');
const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
const [phoneNumber, setPhoneNumber] = useState('');
const [isOpen, setIsOpen] = useState(false);
const [error, setError] = useState('');
const [selectedRole, setSelectedRole] = useState(null);
const [selectedEmployee, setSelectedEmployee] = useState(null);

const handlePhoneChange = (e) => {
  const value = e.target.value.replace(/[^\d]/g, '');
  setPhoneNumber(value);
  validatePhone(value);
  if (selectedRole) {
    const assistantSelect = document.getElementById('assistant-select');
    assistantSelect.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleRoleSelect = (role) => {
  setSelectedRole(role.id);

  // Mover el scroll a la sección de selección de asistente
  const assistantSelect = document.getElementById('assistant-select');
  assistantSelect.scrollIntoView({ behavior: 'smooth' });
};

const validatePhone = (number) => {
  if (number.length < 8) {
    setError('El número debe tener al menos 8 dígitos');
  } else if (number.length > 15) {
    setError('El número no debe exceder 15 dígitos');
  } else {
    setError('');
  }
};

return (
  <div className="w-full max-w-2xl p-6 bg-white rounded-2xl shadow-xl">
    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
      Contrata tu Asistente
    </h1>

    <div className="space-y-8">
        {/* Sección de teléfono y nombre */}
        <div>
            <label className="block text-lg font-medium text-gray-700 mb-4">
                <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-500" />
                    Pon tu Nombre y Número de teléfono
                </div>
                <span className="text-sm text-gray-500 block mt-1">
                    El Asistente contratado se comunicará contigo
                </span>
            </label>

            {/* Campo de Nombre */}
            <div className="mb-4">
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ingresa tu Nombre"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            
            {/* Campo de Teléfono con código de país */}
            <div className="flex">
                <div className="relative">
                    <button
                        type="button"
                        className="flex items-center space-x-2 px-3 py-2 border rounded-l-lg bg-white hover:bg-gray-50"
                        onClick={() => setIsOpen(!isOpen)}
                        title={selectedCountry.country}
                    >
                        <div className="w-6 h-4">
                            {selectedCountry.flag}
                        </div>
                        <span className="font-medium">{selectedCountry.acronym}</span>
                        <span className="text-sm text-gray-600">{selectedCountry.code}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                    
                    {isOpen && (
                        <div className="absolute z-10 w-auto mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto min-w-[160px]">
                            {countryCodes.map((country) => (
                                <button
                                    key={country.code}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center space-x-3"
                                    onClick={() => {
                                        setSelectedCountry(country);
                                        setIsOpen(false);
                                    }}
                                    title={country.country}
                                >
                                    <div className="w-6 h-4">
                                        {country.flag}
                                    </div>
                                    <span className="font-medium">{country.acronym}</span>
                                    <span className="text-sm text-gray-600 ml-auto">{country.code}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <input
                    type="tel"
                    className="flex-1 px-3 py-2 border-l-0 border rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ingresa tu Número"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                />
            </div>

            {error && (
                <p className="mt-2 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>

        {/* Sección de roles */}
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Elige el Rol
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roles.map((role) => (
                    <button
                        key={role.id}
                        onClick={() => handleRoleSelect(role)}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                            selectedRole === role.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }`}
                    >
                        <div className="flex flex-col items-center text-center space-y-3">
                            {role.icon}
                            <h3 className="font-semibold text-lg">{role.title}</h3>
                            <p className="text-sm text-gray-600">{role.description}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>

        {selectedRole && (
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Selecciona tu Asistente
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {employeeAvatars
                        .filter((employee) => {
                            switch(selectedRole) {
                                case 'sales':
                                    return employee.id.startsWith('s');
                                case 'support':
                                    return employee.id.startsWith('t');
                                case 'customer':
                                    return employee.id.startsWith('c');
                                default:
                                    return false;
                            }
                        })
                        .map((employee) => (
                            <button
                                key={employee.id}
                                onClick={() => setSelectedEmployee(employee.id)}
                                className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                                    selectedEmployee === employee.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-blue-300'
                                }`}
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <img 
                                        src={employee.photo}
                                        alt={employee.name}
                                        className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <div className="text-center">
                                        <h3 className="font-semibold text-xl mb-1">{employee.name}</h3>
                                        <p className="text-sm text-gray-600 font-medium">{employee.speciality}</p>
                                        <p className="text-sm text-gray-500">{employee.experience} de experiencia</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                </div>
            </div>
        )}

        {/* Botón de acción */}
        <button
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            disabled={!fullName || !phoneNumber || !selectedRole || !selectedEmployee || error}
        >
            Contratar Asistente
        </button>
      </div>
    </div>
  );
};

export default PhoneInput;