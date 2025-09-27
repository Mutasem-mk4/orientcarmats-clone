"use client";

import * as React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const countries = [
  { code: 'DE', name: 'Deutschland / Germany', flag: 'https://cdn.shopify.com/static/images/flags/de.svg' },
  { code: 'AT', name: 'Austria / Österreich', flag: 'https://cdn.shopify.com/static/images/flags/at.svg' },
  { code: 'US', name: 'United States', flag: 'https://cdn.shopify.com/static/images/flags/us.svg' },
  { code: 'AE', name: 'United Arab Emirates', flag: 'https://cdn.shopify.com/static/images/flags/ae.svg' },
  { code: 'AU', name: 'Australia', flag: 'https://cdn.shopify.com/static/images/flags/au.svg' },
  { code: 'CA', name: 'Canada', flag: 'https://cdn.shopify.com/static/images/flags/ca.svg' },
  { code: 'CH', name: 'Switzerland', flag: 'https://cdn.shopify.com/static/images/flags/ch.svg' },
  { code: 'GB', name: 'United Kingdom', flag: 'https://cdn.shopify.com/static/images/flags/gb.svg' },
  { code: 'NO', name: 'Norway / Norge', flag: 'https://cdn.shopify.com/static/images/flags/no.svg' },
  { code: 'NZ', name: 'New Zealand', flag: 'https://cdn.shopify.com/static/images/flags/nz.svg' },
  { code: 'SG', name: 'Singapore', flag: 'https://cdn.shopify.com/static/images/flags/sg.svg' },
  { code: 'KW', name: 'Kuwait', flag: 'https://cdn.shopify.com/static/images/flags/kw.svg' },
  { code: 'TR', name: 'Türkiye / Turkey', flag: 'https://cdn.shopify.com/static/images/flags/tr.svg' },
  { code: 'AZ', name: 'Azerbaijan', flag: 'https://cdn.shopify.com/static/images/flags/az.svg' },
  { code: 'AM', name: 'Armenia', flag: 'https://cdn.shopify.com/static/images/flags/am.svg' },
  { code: 'GE', name: 'Georgia', flag: 'https://cdn.shopify.com/static/images/flags/ge.svg' },
  { code: 'KZ', name: 'Kazakhstan', flag: 'https://cdn.shopify.com/static/images/flags/kz.svg' },
  { code: 'KG', name: 'Kyrgyzstan', flag: 'https://cdn.shopify.com/static/images/flags/kg.svg' },
  { code: 'SA', name: 'Saudi Arabia', flag: 'https://cdn.shopify.com/static/images/flags/sa.svg' },
  { code: 'RU', name: 'Russia / Россия', flag: 'https://cdn.shopify.com/static/images/flags/ru.svg' },
  { code: 'BE', name: 'Belgium', flag: 'https://cdn.shopify.com/static/images/flags/be.svg' },
  { code: 'BG', name: 'Bulgaria / България', flag: 'https://cdn.shopify.com/static/images/flags/bg.svg' },
  { code: 'HR', name: 'Hrvatska / Croatia', flag: 'https://cdn.shopify.com/static/images/flags/hr.svg' },
  { code: 'CY', name: 'Cyprus', flag: 'https://cdn.shopify.com/static/images/flags/cy.svg' },
  { code: 'CZ', name: 'Czech Republic', flag: 'https://cdn.shopify.com/static/images/flags/cz.svg' },
  { code: 'DK', name: 'Danmark', flag: 'https://cdn.shopify.com/static/images/flags/dk.svg' },
  { code: 'EE', name: 'Eesti / Estonia', flag: 'https://cdn.shopify.com/static/images/flags/ee.svg' },
  { code: 'FI', name: 'Finland', flag: 'https://cdn.shopify.com/static/images/flags/fi.svg' },
  { code: 'FR', name: 'France', flag: 'https://cdn.shopify.com/static/images/flags/fr.svg' },
  { code: 'GR', name: 'Greece / Ελλαδα', flag: 'https://cdn.shopify.com/static/images/flags/gr.svg' },
  { code: 'HU', name: 'Hungary / Hungary', flag: 'https://cdn.shopify.com/static/images/flags/hu.svg' },
  { code: 'IE', name: 'Ireland', flag: 'https://cdn.shopify.com/static/images/flags/ie.svg' },
  { code: 'IT', name: 'Italia / Italy', flag: 'https://cdn.shopify.com/static/images/flags/it.svg' },
  { code: 'LV', name: 'Latvija / Latvia', flag: 'https://cdn.shopify.com/static/images/flags/lv.svg' },
  { code: 'LT', name: 'Lietuva / Lithuania', flag: 'https://cdn.shopify.com/static/images/flags/lt.svg' },
  { code: 'LU', name: 'Luxembourg', flag: 'https://cdn.shopify.com/static/images/flags/lu.svg' },
  { code: 'MT', name: 'Malta', flag: 'https://cdn.shopify.com/static/images/flags/mt.svg' },
  { code: 'NL', name: 'Nederland / Netherlands', flag: 'https://cdn.shopify.com/static/images/flags/nl.svg' },
  { code: 'PL', name: 'Polska / Poland', flag: 'https://cdn.shopify.com/static/images/flags/pl.svg' },
  { code: 'PT', name: 'Portugal', flag: 'https://cdn.shopify.com/static/images/flags/pt.svg' },
  { code: 'RO', name: 'România', flag: 'https://cdn.shopify.com/static/images/flags/ro.svg' },
  { code: 'SK', name: 'Slovensko / Slovakia', flag: 'https://cdn.shopify.com/static/images/flags/sk.svg' },
  { code: 'SI', name: 'Slovenija', flag: 'https://cdn.shopify.com/static/images/flags/si.svg' },
  { code: 'ES', name: 'España', flag: 'https://cdn.shopify.com/static/images/flags/es.svg' },
  { code: 'SE', name: 'Sverige / Sweden', flag: 'https://cdn.shopify.com/static/images/flags/se.svg' },
  { code: 'BY', name: 'Belarus / Беларусь', flag: 'https://cdn.shopify.com/static/images/flags/by.svg' },
  { code: 'UA', name: 'Ukraine / Україна', flag: 'https://cdn.shopify.com/static/images/flags/ua.svg' },
  { code: 'LI', name: 'Liechtenstein', flag: 'https://cdn.shopify.com/static/images/flags/li.svg' },
  { code: 'MC', name: 'Monaco', flag: 'https://cdn.shopify.com/static/images/flags/mc.svg' },
];

const languages = [
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
];

export default function CountryLanguageSelector() {
  const [open, setOpen] = React.useState(true);
  const [selectedCountry, setSelectedCountry] = React.useState("DE");
  const [selectedLanguage, setSelectedLanguage] = React.useState("de");

  const selectedCountryData = countries.find((c) => c.code === selectedCountry);

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 bg-card text-card-foreground rounded-lg shadow-lg font-body">
          <h2 className="font-display text-2xl font-semibold text-center mb-2 text-foreground">
            Are you in the right place?
          </h2>

          <p className="text-sm text-center text-muted-foreground mb-6">
            Please select your shipping country. Buy from the country of your
            choice. Remember that we can only ship your order to addresses
            located in the chosen country.
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="country-select" className="ml-1 text-sm font-medium text-foreground">
                Country
              </label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger id="country-select" className="w-full mt-1">
                  <SelectValue asChild>
                    <div className="flex items-center gap-2 overflow-hidden">
                      {selectedCountryData && (
                        <Image
                          src={selectedCountryData.flag}
                          alt={`${selectedCountryData.name} flag`}
                          width={24}
                          height={18}
                          className="rounded-sm flex-shrink-0"
                        />
                      )}
                      <span className="truncate">{selectedCountryData?.name}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <div className="flex items-center gap-2">
                        <Image
                          src={country.flag}
                          alt={`${country.name} flag`}
                          width={24}
                          height={18}
                          className="rounded-sm"
                        />
                        <span>{country.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="language-select" className="ml-1 text-sm font-medium text-foreground">
                Language
              </label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger id="language-select" className="w-full mt-1">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language.code} value={language.code}>
                      {language.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-base font-medium py-3 h-auto"
            onClick={() => setOpen(false)}
          >
            Shop now
          </Button>

          <div className="text-center mt-4">
            <a
              href="https://orbe.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:underline"
            >
              Powered by orbe.app
            </a>
          </div>
        </div>
      </div>
    </>
  );
}