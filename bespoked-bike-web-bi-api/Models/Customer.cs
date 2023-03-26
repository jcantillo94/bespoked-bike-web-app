using System;
using System.Collections.Generic;

namespace bespoked_bike_web_bi_api.Models;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public DateTime StartDate { get; set; }

    public virtual ICollection<Sale> Sales { get; } = new List<Sale>();
}
