import React from 'react'

const AdministrarUsuarios = () => {
  return (
    <div className=" px-2 mb-10">
        <h2 id="main" class="text-3xl font-light text-center">
          Usuarios
        </h2>

        <div class="flex flex-col mt-5">
          <div class="py-2 overflow-x-auto">
            <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table class="min-w-full">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Apellido
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Correo
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Telefono
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Rol
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody id="role-list" class="bg-white"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdministrarUsuarios