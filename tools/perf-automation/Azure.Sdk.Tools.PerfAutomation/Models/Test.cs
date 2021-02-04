﻿using System.Collections.Generic;

namespace Azure.Sdk.Tools.PerfAutomation.Models
{
    public class Test
    {
        public string Name { get; set; }
        public IEnumerable<string> Arguments { get; set; }
        public IDictionary<Language, LanguageSettings> Languages { get; set; }
    }
}