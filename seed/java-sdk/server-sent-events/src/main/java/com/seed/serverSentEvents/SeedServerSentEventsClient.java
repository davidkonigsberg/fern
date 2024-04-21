/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.serverSentEvents;

import com.seed.serverSentEvents.core.ClientOptions;
import com.seed.serverSentEvents.core.Suppliers;
import com.seed.serverSentEvents.resources.completions.CompletionsClient;
import java.util.function.Supplier;

public class SeedServerSentEventsClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<CompletionsClient> completionsClient;

    public SeedServerSentEventsClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.completionsClient = Suppliers.memoize(() -> new CompletionsClient(clientOptions));
    }

    public CompletionsClient completions() {
        return this.completionsClient.get();
    }

    public static SeedServerSentEventsClientBuilder builder() {
        return new SeedServerSentEventsClientBuilder();
    }
}