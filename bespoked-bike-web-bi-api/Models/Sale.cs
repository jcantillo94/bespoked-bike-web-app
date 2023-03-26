using System;
using System.Collections.Generic;

namespace bespoked_bike_web_bi_api.Models;

public partial class Sale
{
    public int SaleId { get; set; }

    public int ProductId { get; set; }

    public int SalespersonId { get; set; }

    public int CustomerId { get; set; }

    public DateTime SaleDate { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;

    public virtual Salesperson Salesperson { get; set; } = null!;
}
