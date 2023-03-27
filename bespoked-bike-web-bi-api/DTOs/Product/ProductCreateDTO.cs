using bespoked_bike_web_bi_api.Models;
using System;

public class ProductCreateDTO
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


}
