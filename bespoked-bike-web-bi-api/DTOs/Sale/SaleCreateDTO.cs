using bespoked_bike_web_bi_api.Models;
using System;

public partial class SaleCreateDTO
{
    public int SaleId { get; set; }

    public int ProductId { get; set; }

    public int SalespersonId { get; set; }

    public int CustomerId { get; set; }

    public DateTime SaleDate { get; set; }

    public virtual CustomerCreateDTO Customer { get; set; } = null!;

    public virtual ProductCreateDTO Product { get; set; } = null!;

    public virtual SalespersonCreateDTO Salesperson { get; set; } = null!;

}
