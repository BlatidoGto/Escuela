using System;
using System.Collections.Generic;

namespace Escuela.Models;

public partial class Alumno
{
    public int IdAlumno { get; set; }

    public string? Nombre { get; set; }

    public string? ApPat { get; set; }

    public string? ApMat { get; set; }

    public decimal? Cal { get; set; }
}
