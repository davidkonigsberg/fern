using System.Text.Json.Serialization;
using SeedExamples;

#nullable enable

namespace SeedExamples;

public class Response
{
    [JsonPropertyName("response")]
    public object Response_ { get; init; }

    [JsonPropertyName("identifiers")]
    public IEnumerable<Identifier> Identifiers { get; init; }
}
