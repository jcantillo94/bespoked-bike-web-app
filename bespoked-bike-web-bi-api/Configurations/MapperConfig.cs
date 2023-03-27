using AutoMapper;
using bespoked_bike_web_bi_api.Models;

namespace bespoked_bike_web_bi_api.Configurations
{
    public class MapperConfig : Profile
    {

    public MapperConfig()
    {

            CreateMap<Customer, CustomerCreateDTO>().ReverseMap();
            CreateMap<Product, ProductCreateDTO>().ReverseMap();
            CreateMap<Salesperson, SalespersonCreateDTO>().ReverseMap();

            CreateMap<Sale, SaleCreateDTO>()
            .ForMember(dest => dest.Customer, opt => opt.MapFrom(src => src.Customer))
            .ForMember(dest => dest.Product, opt => opt.MapFrom(src => src.Product))
            .ForMember(dest => dest.Salesperson, opt => opt.MapFrom(src => src.Salesperson));

        }

    }
}
