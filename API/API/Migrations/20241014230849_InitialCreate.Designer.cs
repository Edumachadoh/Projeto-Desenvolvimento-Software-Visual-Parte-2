﻿// <auto-generated />
using System;
using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(AppDataContext))]
    [Migration("20241014230849_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.10");

            modelBuilder.Entity("API.Models.Arqueologo", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AnosExperiencia")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Cpf")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("TEXT");

                    b.Property<int>("IdRegistroProfissional")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Arqueologos");
                });

            modelBuilder.Entity("API.Models.Artefato", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("CivilizacaoOrigem")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("Dimensao")
                        .HasColumnType("TEXT");

                    b.Property<string>("Funcionalidade")
                        .HasColumnType("TEXT");

                    b.Property<string>("Material")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.Property<string>("Periodo")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Artefatos");
                });

            modelBuilder.Entity("API.Models.Fossil", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("CondicaoPreservacao")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("EpocaGeologica")
                        .HasColumnType("TEXT");

                    b.Property<string>("EspeciaOrganismo")
                        .HasColumnType("TEXT");

                    b.Property<string>("LocalizacaoDescoberta")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.Property<string>("NomeCientifico")
                        .HasColumnType("TEXT");

                    b.Property<string>("TipoFossil")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Fosseis");
                });

            modelBuilder.Entity("API.Models.Paleontologo", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AnosExperiencia")
                        .HasColumnType("INTEGER");

                    b.Property<string>("AreaEspecializacao")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cpf")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("TEXT");

                    b.Property<int>("IdMatricula")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Paleontologos");
                });
#pragma warning restore 612, 618
        }
    }
}