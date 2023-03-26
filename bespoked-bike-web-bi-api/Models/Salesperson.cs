using System;
using System.Collections.Generic;

namespace bespoked_bike_web_bi_api.Models;

public partial class Salesperson
{
    public int SalespersonId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public DateTime StartDate { get; set; }

    public DateTime? TerminationDate { get; set; }

    public int? ManagerId { get; set; }

    public virtual ICollection<Salesperson> InverseManager { get; } = new List<Salesperson>();

    public virtual Salesperson? Manager { get; set; }

    public virtual ICollection<Sale> Sales { get; } = new List<Sale>();
}
