public class OrderSummaryData
{
    [BsonIgnoreIfDefault]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public int ItemId { get; set; }
    public string Name { get; set; }
    public int Total { get; set; }
}