"use client";

import React from 'react';

export default function NewsletterSignup() {
  return (
    <div className="w-full">
      <h5 className="font-display text-base font-semibold text-primary-foreground mb-4">
        النشرة البريدية
      </h5>
      <div className="w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission logic here
          }}
          action="/contact#contact_form"
          method="post"
          noValidate
          className="relative flex w-full max-w-md items-center"
        >
          <input type="hidden" name="form_type" value="customer" />
          <input type="hidden" name="utf8" value="✓" />
          <input type="hidden" name="contact[tags]" value="newsletter" />
          
          <div className="relative flex-grow">
            <label htmlFor="newsletter-email" className="sr-only">البريد الإلكتروني</label>
            <input
              id="newsletter-email"
              type="email"
              name="contact[email]"
              placeholder="البريد الإلكتروني"
              required
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="email"
              className="h-[46px] w-full rounded-[4px] border-none bg-card py-2 pl-4 pr-[150px] font-body text-sm font-normal text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          
          <button
            type="submit"
            name="commit"
            className="absolute right-[4px] top-1/2 flex h-[38px] -translate-y-1/2 items-center justify-center rounded-[4px] bg-secondary px-5 font-body text-sm font-semibold uppercase text-secondary-foreground transition-colors hover:bg-secondary/90"
            aria-label="اشترك"
          >
            اشترك
          </button>
        </form>
      </div>
    </div>
  );
}