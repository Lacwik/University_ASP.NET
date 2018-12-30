using System.ComponentModel.DataAnnotations.Schema;

namespace classicGarage_API.Models
{
    public class Part
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Catalog_number { get; set; }
        public string Bought_date { get; set; }
        public string Sell_date { get; set; }
        public int Bought_price { get; set; }
        public int Sell_price { get; set; }

        [ForeignKey("Car")]
        public int Car_Id { get; set; }

        public virtual Car Car { get; set; }
    }
}
