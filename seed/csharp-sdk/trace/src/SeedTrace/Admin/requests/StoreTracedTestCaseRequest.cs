using System.Text.Json.Serialization;
using SeedTrace;

#nullable enable

namespace SeedTrace;

public class StoreTracedTestCaseRequest
{
    [JsonPropertyName("result")]
    public TestCaseResultWithStdout Result { get; init; }

    [JsonPropertyName("traceResponses")]
    public IEnumerable<TraceResponse> TraceResponses { get; init; }
}
