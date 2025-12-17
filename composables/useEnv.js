/**
 * Composable to access environment variables (JavaScript)
 */
export const useEnv = () => {
  const config = useRuntimeConfig();

  if (import.meta.client) {
    console.log("Environment check:", {
      movieApiKey: config.public.movieApiKey ? "Set" : "Not set",
      movieApiBaseUrl: config.public.movieApiBaseUrl,
    });
  }

  return {
    movieApiKey: config.public.movieApiKey,
    movieApiBaseUrl: config.public.movieApiBaseUrl,
    appUrl: config.public.appUrl,

    isApiKeySet: () => {
      const hasKey =
        !!config.public.movieApiKey && config.public.movieApiKey.trim() !== "";
      if (!hasKey && import.meta.client) {
        console.warn(
          "API key is missing or empty. Check your .env file and restart the dev server."
        );
      }
      return hasKey;
    },
  };
};
