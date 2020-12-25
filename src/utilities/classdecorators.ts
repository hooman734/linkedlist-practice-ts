export const nameKey = Symbol('name');

/**
 * To perserve class name though mangling.
 * @example
 * @name('Customer')
 * class Customer {}
 * @param className
 */
export function Name(className: string): ClassDecorator {
  return (Reflect as any).metadata(nameKey, className);
}

/**
 * @example
 * const instance = new Customer();
 * getInstanceName(instance); // 'Customer'
 * @param instance
 */
export function getName<T>(instance: T): string {
  return (Reflect as any).getMetadata(nameKey, instance.constructor);
}
