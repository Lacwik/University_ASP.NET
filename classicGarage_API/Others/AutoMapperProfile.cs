using AutoMapper;
using classicGarage_API.Dtos;
using classicGarage_API.Models;

namespace classicGarage_API.Others
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}
