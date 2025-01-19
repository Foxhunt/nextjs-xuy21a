"use client";

import { use, useTransition } from "react";

import { PaginatedDocs } from "payload";
import { EventType } from "../../../../payload-types.ts";

import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Form,
  Skeleton,
} from "@heroui/react";

import { startEvent } from "../serverActions/eventActions.tsx";

type StartEvent = {
  eventTypesPromise: Promise<PaginatedDocs<EventType>>;
};

export default function StartEvent({ eventTypesPromise }: StartEvent) {
  const eventTypes = use(eventTypesPromise).docs;
  const [isPending, startTransition] = useTransition();

  return (
    <div className="grid grid-cols-1 gap-4 py-4">
      <Form
        className="gap-4 items-stretch"
        validationBehavior="native"
        onSubmit={(e) => {
          e.preventDefault();
          startTransition(() => {
            startEvent(e.currentTarget.elements["name"].value);
          });
        }}
      >
        <div className="flex gap-4">
          <Autocomplete
            name="name"
            isRequired
            allowsCustomValue
            aria-label="Event Type"
            placeholder="Event Type"
            errorMessage="Please select or enter an event type"
            defaultItems={eventTypes.sort(
              (a, b) => b.usageCount! - a.usageCount!
            )}
          >
            {(item) => (
              <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
            )}
          </Autocomplete>
          <Button type="submit" isLoading={isPending}>
            Start
          </Button>
        </div>
      </Form>
      {eventTypes
        .sort((a, b) => b.usageCount! - a.usageCount!)
        .slice(0, 5)
        .map((event) => (
          <PendableButton key={event.id} event={event} action={startEvent} />
        ))}
    </div>
  );
}

type PendableButtonProps = {
  event: EventType;
  action: (...args: any[]) => Promise<void>;
};

function PendableButton({ event, action }: PendableButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      isLoading={isPending}
      onPress={() => {
        startTransition(() => {
          action(event.name);
        });
      }}
    >
      {event.name}
    </Button>
  );
}

export function StartEventSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 py-4">
      <Form className="gap-4 items-stretch" validationBehavior="native">
        <div className="flex gap-4">
          <Autocomplete
            name="name"
            isRequired
            allowsCustomValue
            aria-label="Event Type"
            placeholder="Event Type"
            errorMessage="Please select or enter an event type"
          >
            <AutocompleteItem textValue="Skeleton" />
          </Autocomplete>
          <Button type="submit">Start</Button>
        </div>
      </Form>
      {new Array(5).fill("").map((_, index) => (
        <Skeleton key={index} className="rounded-lg w-full">
          <Button>Button</Button>
        </Skeleton>
      ))}
    </div>
  );
}
