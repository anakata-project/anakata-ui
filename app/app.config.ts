export default defineAppConfig({
  ui: {
    colors: {
      primary: 'coral',
      success: 'ok',
      warning: 'warn',
      info: 'sand',
      error: 'coral-deep',
      neutral: 'forest',
    },

    button: {
      slots: {
        base: 'rounded-none font-mono font-normal text-[10px] tracking-[.2em] uppercase disabled:opacity-35 aria-disabled:opacity-35 active:scale-[.97] disabled:scale-100 aria-disabled:scale-100 transition-[background,transform,border-color,color] duration-200 ease-[var(--eo)]',
      },
      variants: {
        size: {
          md: {
            base: 'px-5 py-[11px] text-[10px] gap-2',
          },
        },
      },
      compoundVariants: [
        { color: 'primary', variant: 'solid', class: 'text-[#141B17] bg-primary hover:bg-primary active:bg-primary' },
        { color: 'secondary', variant: 'solid', class: 'hover:bg-secondary active:bg-secondary' },
        { color: 'success', variant: 'solid', class: 'hover:bg-success active:bg-success' },
        { color: 'info', variant: 'solid', class: 'hover:bg-info active:bg-info' },
        { color: 'warning', variant: 'solid', class: 'hover:bg-warning active:bg-warning' },
        { color: 'error', variant: 'solid', class: 'hover:bg-error active:bg-error' },
        { color: 'neutral', variant: 'solid', class: 'hover:bg-inverted active:bg-inverted' },
        { color: 'primary', variant: 'outline', class: 'bg-transparent text-(--ivory) ring ring-inset ring-(--hair) hover:bg-transparent hover:text-primary hover:ring-(--coral) active:bg-transparent disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent' },
        { color: 'secondary', variant: 'outline', class: 'bg-transparent text-(--ivory) ring ring-inset ring-(--hair) hover:bg-transparent hover:text-primary hover:ring-(--coral) active:bg-transparent disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent' },
        { color: 'success', variant: 'outline', class: 'bg-transparent text-(--ivory) ring ring-inset ring-(--hair) hover:bg-transparent hover:text-primary hover:ring-(--coral) active:bg-transparent disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent' },
        { color: 'info', variant: 'outline', class: 'bg-transparent text-(--ivory) ring ring-inset ring-(--hair) hover:bg-transparent hover:text-primary hover:ring-(--coral) active:bg-transparent disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent' },
        { color: 'warning', variant: 'outline', class: 'bg-transparent text-(--ivory) ring ring-inset ring-(--hair) hover:bg-transparent hover:text-primary hover:ring-(--coral) active:bg-transparent disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent' },
        { color: 'error', variant: 'outline', class: 'bg-transparent text-(--ivory) ring ring-inset ring-(--hair) hover:bg-transparent hover:text-primary hover:ring-(--coral) active:bg-transparent disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent' },
        { color: 'neutral', variant: 'outline', class: 'bg-transparent text-(--ivory) ring ring-inset ring-(--hair) hover:bg-transparent hover:text-primary hover:ring-(--coral) active:bg-transparent disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent' },
      ],
    },

    input: {
      slots: {
        base: 'rounded-none font-normal disabled:opacity-35',
      },
      variants: {
        size: {
          md: {
            base: 'px-3 py-[11px] text-[13px] md:text-[13px] font-sans',
          },
          sm: {
            base: 'px-2.5 py-2 text-[11px] font-mono tracking-[.06em]',
          },
        },
        variant: {
          outline: 'bg-(--forest-950) text-(--ivory) ring ring-inset ring-(--hair)',
        },
      },
      compoundVariants: [
        { color: 'primary', variant: ['outline', 'subtle'], class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--coral)' },
        { color: 'neutral', variant: ['outline', 'subtle'], class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--coral)' },
        { fixed: false, size: 'md', class: 'md:text-[13px]' },
        { fixed: false, size: 'sm', class: 'md:text-[11px]' },
      ],
    },

    textarea: {
      slots: {
        base: 'rounded-none font-normal font-sans disabled:opacity-35',
      },
      variants: {
        size: {
          md: {
            base: 'px-3 py-[11px] text-[13px] md:text-[13px]',
          },
        },
        variant: {
          outline: 'bg-(--forest-950) text-(--ivory) ring ring-inset ring-(--hair)',
        },
      },
      compoundVariants: [
        { color: 'primary', variant: ['outline', 'subtle'], class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--coral)' },
        { color: 'neutral', variant: ['outline', 'subtle'], class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--coral)' },
        { fixed: false, size: 'md', class: 'md:text-[13px]' },
      ],
    },

    select: {
      slots: {
        base: 'rounded-none font-normal disabled:opacity-35',
        content: 'rounded-none shadow-none bg-(--forest) ring ring-(--hair)',
        item: 'rounded-none before:rounded-none',
      },
      variants: {
        size: {
          md: {
            base: 'px-3 py-[11px] text-[13px] md:text-[13px] font-sans',
          },
          sm: {
            base: 'px-3 py-2 text-[10px] font-mono tracking-[.14em] uppercase bg-(--forest)',
          },
        },
        variant: {
          outline: 'bg-(--forest-950) text-(--ivory) ring ring-inset ring-(--hair)',
        },
      },
      compoundVariants: [
        { color: 'primary', variant: ['outline', 'subtle'], class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--coral)' },
        { color: 'neutral', variant: ['outline', 'subtle'], class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--coral)' },
        { fixed: false, size: 'md', class: 'md:text-[13px]' },
        { fixed: false, size: 'sm', class: 'md:text-[10px]' },
      ],
    },

    selectMenu: {
      slots: {
        base: 'rounded-none font-normal disabled:opacity-35',
        content: 'rounded-none shadow-none bg-(--forest) ring ring-(--hair)',
        item: 'rounded-none before:rounded-none',
      },
      variants: {
        size: {
          md: {
            base: 'px-3 py-[11px] text-[13px] md:text-[13px] font-sans',
          },
          sm: {
            base: 'px-3 py-2 text-[10px] font-mono tracking-[.14em] uppercase bg-(--forest)',
          },
        },
        variant: {
          outline: 'bg-(--forest-950) text-(--ivory) ring ring-inset ring-(--hair)',
        },
      },
      compoundVariants: [
        { color: 'primary', variant: ['outline', 'subtle'], class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--coral)' },
        { color: 'neutral', variant: ['outline', 'subtle'], class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--coral)' },
        { fixed: false, size: 'md', class: 'md:text-[13px]' },
        { fixed: false, size: 'sm', class: 'md:text-[10px]' },
      ],
    },

    formField: {
      slots: {
        label: 'block font-mono font-normal text-[9px] tracking-[.2em] uppercase text-(--iv62) mb-[6px]',
      },
      variants: {
        orientation: {
          vertical: {
            container: 'mt-0',
          },
        },
      },
    },

    table: {
      slots: {
        root: '',
        th: 'px-5 py-2.5 text-start font-mono font-normal text-[8.5px] tracking-[.16em] uppercase text-(--iv38) border-b border-(--hair)',
        td: 'px-5 py-[11px] text-[12.5px] text-default whitespace-normal border-b border-[rgba(242,241,225,0.06)]',
        tbody: '[&>tr]:hover:bg-[rgba(242,241,225,0.03)]',
      },
    },

    badge: {
      slots: {
        base: 'rounded-none font-mono font-normal uppercase tracking-[.14em]',
      },
      variants: {
        size: {
          md: {
            base: 'text-[8.5px] px-[9px] py-[3px]',
          },
        },
      },
      defaultVariants: {
        variant: 'outline',
        color: 'neutral',
      },
    },

    modal: {
      slots: {
        content: 'rounded-none shadow-none bg-(--forest) ring ring-(--hair)',
        header: 'p-0 mb-[22px] min-h-0',
        body: 'p-0',
        footer: 'p-0 pt-4',
        title: 'font-display font-light text-[16px] tracking-[.2em] uppercase text-highlighted',
        close: 'size-[34px] rounded-none ring ring-(--hair) text-(--iv62)',
      },
      variants: {
        overlay: {
          true: {
            overlay: 'bg-[rgba(10,14,12,0.75)]',
          },
        },
        fullscreen: {
          false: {
            content: 'w-[640px] max-w-[94vw] max-h-[92vh] p-[34px] rounded-none shadow-none overflow-y-auto',
          },
        },
      },
    },

    tabs: {
      slots: {
        root: 'gap-0',
        list: 'p-0 gap-0 rounded-none bg-transparent border-b border-(--hair) flex w-full',
        trigger: 'rounded-none font-mono font-normal text-[9px] tracking-[.14em] uppercase text-(--iv62) hover:data-[state=inactive]:text-(--ivory)',
        indicator: 'rounded-none',
        content: 'rounded-none',
      },
      variants: {
        size: {
          md: {
            trigger: 'px-3 py-[9px] text-[9px]',
          },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'link',
          class: {
            indicator: 'bg-primary h-0.5',
            trigger: 'data-[state=active]:text-(--ivory)',
          },
        },
      ],
      defaultVariants: {
        variant: 'link',
      },
    },

    card: {
      slots: {
        root: 'rounded-none',
        header: 'px-5 py-4',
        title: 'font-display font-light text-[13px] tracking-[.2em] uppercase text-(--sand)',
        body: 'p-5',
        footer: 'px-5 py-4',
      },
      variants: {
        variant: {
          outline: {
            root: 'bg-(--forest-900) ring ring-(--hair) divide-(--hair)',
          },
        },
      },
    },

    slideover: {
      slots: {
        overlay: 'bg-[rgba(10,14,12,0.7)]',
        content: 'rounded-none shadow-none bg-(--forest) ring-0 border-(--hair) sm:shadow-none',
        header: 'px-8 pt-[30px] pb-4',
        body: 'px-8 pb-[60px]',
        footer: 'px-8 py-4',
        title: 'font-display font-light text-[17px] tracking-[.18em] uppercase text-highlighted',
        close: 'size-[34px] rounded-none ring ring-(--hair) text-(--iv62)',
      },
      variants: {
        side: {
          right: {
            content: 'w-[600px] max-w-[96vw]',
          },
        },
        inset: {
          true: {
            content: 'rounded-none',
          },
        },
      },
      compoundVariants: [
        {
          side: 'right',
          inset: false,
          class: {
            content: 'w-[600px] max-w-[96vw]',
          },
        },
      ],
    },

    checkbox: {
      slots: {
        base: 'rounded-none',
        label: 'font-sans font-normal text-[12.5px] text-(--ivory)',
      },
    },

    switch: {
      slots: {
        thumb: 'shadow-none',
        label: 'font-sans font-normal text-[12.5px] text-(--ivory)',
      },
    },

    dropdownMenu: {
      slots: {
        content: 'rounded-none shadow-none bg-(--forest) ring ring-(--hair)',
        item: 'rounded-none before:rounded-none',
        label: 'font-mono text-[9px] tracking-[.2em] uppercase',
      },
    },

    tooltip: {
      slots: {
        content: 'rounded-none shadow-none bg-(--forest) ring ring-(--hair) font-mono text-[9px] tracking-[.14em] uppercase h-auto',
      },
    },

    toast: {
      slots: {
        root: 'rounded-none shadow-none bg-(--forest-900) ring ring-(--hair)',
        title: 'font-mono text-[10px] tracking-[.14em] uppercase',
      },
    },

    pagination: {
      slots: {
        list: 'flex items-center gap-2',
        label: 'font-mono text-[9px] tracking-[.16em] uppercase min-w-8',
      },
    },
  },
})
