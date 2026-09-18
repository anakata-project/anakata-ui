<template>
  <section class="sg-section">
    <AnkLabel class="sg-section__title">
      UButton
    </AnkLabel>

    <p class="label" style="margin-bottom: 10px">
      Solid
    </p>
    <div class="sg-states">
      <SgState label="Default">
        <UButton>
          New booking
        </UButton>
      </SgState>
      <SgState label="Hover">
        <UButton>
          New booking
        </UButton>
      </SgState>
      <SgState label="Focus">
        <div class="sg-force-focus">
          <UButton>
            New booking
          </UButton>
        </div>
      </SgState>
      <SgState label="Disabled">
        <UButton disabled>
          Disabled
        </UButton>
      </SgState>
    </div>
    <SgCompare
      src="/reference/02-bookings.png"
      caption="02-bookings.png · New reservation"
      position="100% 0%"
    >
      <UButton>
        New reservation
      </UButton>
    </SgCompare>

    <p class="label" style="margin: 28px 0 10px">
      Outline
    </p>
    <div class="sg-states">
      <SgState label="Default">
        <UButton variant="outline">
          Cancel
        </UButton>
      </SgState>
      <SgState label="Hover">
        <div class="sg-force-hover-outline">
          <UButton variant="outline">
            Cancel
          </UButton>
        </div>
      </SgState>
      <SgState label="Focus">
        <div class="sg-force-focus">
          <UButton variant="outline">
            Cancel
          </UButton>
        </div>
      </SgState>
      <SgState label="Disabled">
        <UButton variant="outline" disabled>
          Disabled outline
        </UButton>
      </SgState>
    </div>
    <SgCompare
      src="/reference/07-rates.png"
      caption="07-rates.png · Discard / Save & Publish"
      position="100% 28%"
    >
      <div class="sg-states">
        <UButton variant="outline">
          Discard
        </UButton>
        <UButton>
          Save & Publish
        </UButton>
      </div>
    </SgCompare>
  </section>
</template>
