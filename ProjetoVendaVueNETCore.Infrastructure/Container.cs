﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ProjetoVendaVueNETCore.Infrastructure
{
    public class Container
    {
        public static void Instalar(IConfiguration configuration, IServiceCollection services)
        {
            AdicionarServicos(configuration, services);

            RegistrarRepositorios(services);
            RegistrarServicos(services);
            RegistrarComandos(services);
            RegistrarConsultas(services);
            RegistrarEventos(services);
        }

        private static void RegistrarServicos(IServiceCollection services)
        {

        }

        private static void AdicionarServicos(IConfiguration configuration, IServiceCollection services)
        {

        }

        private static void RegistrarRepositorios(IServiceCollection services)
        {
            //services.AddScoped<IAlunoRepository, AlunoRepository>();
            //services.AddScoped<IProfessorRepository, ProfessorRepository>();
        }

        private static void RegistrarConsultas(IServiceCollection services)
        {

        }

        private static void RegistrarComandos(IServiceCollection services)
        {

        }

        private static void RegistrarEventos(IServiceCollection services)
        {

        }
    }
}
