using bespoked_bike_web_bi_api.Models;
using System;

public class SalespersonCreateDTO
{
    public int SalespersonId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public DateTime StartDate { get; set; }

    public DateTime? TerminationDate { get; set; }

    public int? ManagerId { get; set; }

}
