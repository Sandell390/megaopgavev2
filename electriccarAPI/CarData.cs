namespace electriccarAPI
{
    public class CarData
    {
        public string Model { get; set; }
        public string Brand { get; set; }
        public List<string> Colors { get; set; }
        public int Year { get; set; }
        public int Id { get; set; }

        public CarData(string model, string brand, List<string> colors, int year, int id){
            Model = model;
            Brand = brand;
            Colors = colors;
            Year = year;
            Id = id;
        }
    }
}