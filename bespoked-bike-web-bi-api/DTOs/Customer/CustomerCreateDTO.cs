using bespoked_bike_web_bi_api.Models;
using System;

public class CustomerCreateDTO
{
    public int CustomerId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public DateTime StartDate { get; set; }


}
