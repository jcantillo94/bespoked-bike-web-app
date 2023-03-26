using System;
using System.Collections.Generic;

namespace bespoked_bike_web_bi_api.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string ProductName { get; set; } = null!;

    public string? Manufacturer { get; set; }

    public string? Style { get; set; }

    public decimal? PurchasePrice { get; set; }

    public decimal? SalePrice { get; set; }

    public int? Qty { get; set; }

    public int? Onhand { get; set; }

    public decimal? CommissionPct { get; set; }

    public virtual ICollection<Discount> Discounts { get; } = new List<Discount>();

    public virtual ICollection<Sale> Sales { get; } = new List<Sale>();
}
