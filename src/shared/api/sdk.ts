/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CargoForAdminList {
  id: UuidField;

  /** @example some name */
  name: string;
  banner: FileFieldOrNull;
  groups: ParentGroup[];

  /** Застарілий */
  outdated: boolean;

  /** Заборонений для доставки */
  prohibitedForDelivery: boolean;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface CargoForAdminView {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableFieldOrNull;
  groups: ParentGroup[];
  manufacturingMaterials: object[];
  synonyms: object[];

  /** Застарілий */
  outdated: boolean;

  /** Заборонений для доставки */
  prohibitedForDelivery: boolean;
  banner: FileFieldOrNull;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface CargoForAnonymousUserList {
  id: UuidField;

  /** @example some name */
  name: string;
  banner: FileFieldOrNull;
  groups: ParentGroup[];
}

export interface CargoForAnonymousUserView {
  id: UuidField;

  /** @example some name */
  name: string;
  fullDescription: string;
  shortDescription: string;
  groups: ParentGroup[];
  manufacturingMaterials: object[];
  synonyms: object[];

  /** Застарілий */
  outdated: boolean;

  /** Заборонений для доставки */
  prohibitedForDelivery: boolean;
  banner: FileFieldOrNull;
}

export interface CargoSearchList {
  id: UuidField;

  /** @example some name */
  name: string;
  bannerUrl: UrlFieldOrNull;
  groups: ParentGroup[];

  /** Заборонений для доставки */
  prohibitedForDelivery: boolean;
}

export interface CreateCargo {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableFieldOrNull;
  groupIds?: UuidField[];
  manufacturingMaterialIds?: UuidField[];
  synonymIds?: UuidField[];

  /** Застарілий */
  outdated?: boolean;

  /** Заборонений для доставки */
  prohibitedForDelivery?: boolean;
  bannerFileId?: NullableUuidField;
}

export interface ListCargoForAdmin {
  results: CargoForAdminList[];
  metadata: ListMetadataWithOffset;
}

export interface ListCargoForAnonymousUser {
  results: CargoForAnonymousUserList[];
  metadata: ListMetadataWithOffset;
}

export interface ListCargoSearch {
  results: CargoSearchList[];
  metadata: ListMetadataWithOffset;
}

export interface UpdateCargo {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableFieldOrNull;
  groupIds?: UuidField[];
  manufacturingMaterialIds?: UuidField[];
  synonymIds?: UuidField[];

  /** Застарілий */
  outdated?: boolean;

  /** Заборонений для доставки */
  prohibitedForDelivery?: boolean;
  bannerFileId?: NullableUuidField;
  editVersion: EditVersionField;
}

export interface CargoGroupForAdminList {
  id: UuidField;

  /** @example some name */
  name: string;
  icon: FileFieldOrNull;
  parent: ParentGroup;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface CargoGroupForAdminView {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableField;
  icon: FileFieldOrNull;
  banner: FileFieldOrNull;
  parent: ParentGroup;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface CargoGroupForAnonymousUserList {
  id: UuidField;

  /** @example some name */
  name: string;
  icon: FileFieldOrNull;
  parent: ParentGroup;
}

export interface CargoGroupForAnonymousUserView {
  id: UuidField;

  /** @example some name */
  name: string;
  icon: FileFieldOrNull;
  banner: FileFieldOrNull;
  parent: ParentGroup;
  fullDescription: string;
  shortDescription: string;
}

export interface CreateCargoGroup {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableFieldOrNull;
  iconFileId?: NullableUuidField;
  bannerFileId?: NullableUuidField;
  parentId?: NullableUuidField;
}

export interface ListCargoGroupForAdmin {
  results: CargoGroupForAdminList[];
  metadata: ListMetadataWithOffset;
}

export interface ListCargoGroupForAnonymousUser {
  results: CargoGroupForAnonymousUserList[];
  metadata: ListMetadataWithOffset;
}

export interface UpdateCargoGroup {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableFieldOrNull;
  iconFileId?: NullableUuidField;
  bannerFileId?: NullableUuidField;
  parentId?: NullableUuidField;
  editVersion: EditVersionField;
}

export interface CargoParametersForAdmin {
  id: UuidField;

  /**
   * @min 1
   * @example 12
   */
  cargoSpaceMinAmount: number;

  /**
   * @min 1
   * @example 22
   */
  cargoSpaceMaxAmount: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMinWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMaxWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinLength: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxLength: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMinVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMaxVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxVolume: number;
  individualPersonMinPrice: MoneyField;
  individualPersonMaxPrice: MoneyField;
  juristicPersonMinPrice: MoneyField;
  juristicPersonMaxPrice: MoneyField;
  prohibitedForDeliveryCargoGroupIds: UuidField[];
  prohibitedForDeliveryCargoIds: UuidField[];
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface CargoParametersForAnonymousUser {
  id: UuidField;

  /**
   * @min 1
   * @example 12
   */
  cargoSpaceMinAmount: number;

  /**
   * @min 1
   * @example 22
   */
  cargoSpaceMaxAmount: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMinWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMaxWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinLength: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxLength: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMinVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMaxVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxVolume: number;
  individualPersonMinPrice: MoneyField;
  individualPersonMaxPrice: MoneyField;
  juristicPersonMinPrice: MoneyField;
  juristicPersonMaxPrice: MoneyField;
  prohibitedForDeliveryCargoGroupIds: UuidField[];
  prohibitedForDeliveryCargoIds: UuidField[];
}

export interface CreateCargoParameters {
  /**
   * @min 1
   * @example 12
   */
  cargoSpaceMinAmount: number;

  /**
   * @min 1
   * @example 22
   */
  cargoSpaceMaxAmount: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMinWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMaxWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxWeight: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinLength: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxLength: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMinVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMaxVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinVolume: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxVolume: number;
  individualPersonMinPrice: MoneyField;
  individualPersonMaxPrice: MoneyField;
  juristicPersonMinPrice: MoneyField;
  juristicPersonMaxPrice: MoneyField;
  prohibitedForDeliveryCargoGroupIds: UuidField[];
  prohibitedForDeliveryCargoIds: UuidField[];
}

export interface ListCargoParametersForAdmin {
  results: CargoParametersForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListCargoParametersForAnonymousUser {
  results: CargoParametersForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface UpdateCargoParameters {
  /**
   * @min 1
   * @example 12
   */
  cargoSpaceMinAmount?: number;

  /**
   * @min 1
   * @example 22
   */
  cargoSpaceMaxAmount?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMinWeight?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMaxWeight?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinWeight?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxWeight?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinLength?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxLength?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMinVolume?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  shipmentMaxVolume?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMinVolume?: number;

  /**
   * @format float
   * @min 0
   * @example 10
   */
  cargoSpaceMaxVolume?: number;
  individualPersonMinPrice?: MoneyField;
  individualPersonMaxPrice?: MoneyField;
  juristicPersonMinPrice?: MoneyField;
  juristicPersonMaxPrice?: MoneyField;
  prohibitedForDeliveryCargoGroupIds?: UuidField[];
  prohibitedForDeliveryCargoIds?: UuidField[];
  editVersion: EditVersionField;
}

export interface CargoSpaceTypeForAdmin {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  icon: FileFieldOrNull;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
  length: IntegerField;
  width: IntegerField;
  height: IntegerField;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface CargoSpaceTypeForAnonymousUser {
  id: UuidField;

  /** @example some name */
  name: string;
  icon?: FileFieldOrNull;

  /** @example some name */
  description: string | null;
  length: IntegerField;
  width: IntegerField;
  height: IntegerField;
}

export interface CreateCargoSpaceType {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  iconFileId?: NullableUuidField;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
  length: IntegerField;
  width: IntegerField;
  height: IntegerField;
}

export interface ListCargoSpaceTypeForAdmin {
  results: CargoSpaceTypeForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListCargoSpaceTypeForAnonymousUser {
  results: CargoSpaceTypeForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface UpdateCargoSpaceType {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  iconFileId?: NullableUuidField;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
  length?: IntegerField;
  width?: IntegerField;
  height?: IntegerField;
  editVersion: EditVersionField;
}

export interface CountryForAdmin {
  id: UuidField;
  code: CountryCodeField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  cargoRequirement: TranslatableField;

  /** Translatable field (translation for `en` required) */
  currencyFullName: TranslatableField;
  flag: FileFieldOrNull;

  /** @example UAH */
  currencyShortName: string;

  /** @example ₴ */
  currencySign: string;

  /** Translatable field (translation for `en` required) */
  restrictionsDescription: TranslatableField;

  /**
   * Признак активности продукта
   * @example true
   */
  enabled: boolean;

  /** Internation phone code without additional chars like a plus sign or hyphen, only digits. Example for `American Samoa` correct value is `1684` instead `1-684`. */
  phoneCode: CountryPhoneCodeField;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface CountryForAnonymousUser {
  id: UuidField;
  code: CountryCodeField;
  name: string;

  /** Требования к приёмке груза */
  cargoRequirement: string;

  /** Валюта полное название */
  currencyFullName: string;
  flag: FileFieldOrNull;

  /** Валюта сокращённое название */
  currencyShortName: string;

  /**
   * Валюта символ
   * @example ₴
   */
  currencySign: string;

  /** Описание ограничений по стране */
  restrictionsDescription: string;

  /** Internation phone code without additional chars like a plus sign or hyphen, only digits. Example for `American Samoa` correct value is `1684` instead `1-684`. */
  phoneCode: CountryPhoneCodeField;
}

export interface CreateCountry {
  code: CountryCodeField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  cargoRequirement: TranslatableField;

  /** Translatable field (translation for `en` required) */
  currencyFullName: TranslatableField;
  flagFileId?: NullableUuidField;

  /** @example UAH */
  currencyShortName: string;

  /** @example ₴ */
  currencySign: string;

  /** Translatable field (translation for `en` required) */
  restrictionsDescription: TranslatableField;

  /** Internation phone code without additional chars like a plus sign or hyphen, only digits. Example for `American Samoa` correct value is `1684` instead `1-684`. */
  phoneCode: CountryPhoneCodeField;
  enabled?: boolean;
}

export interface ListCountryForAdmin {
  results: CountryForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListCountryForAnonymousUser {
  results: CountryForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export type ListForSearchCountriesAsAnonymous = CountryField[];

export interface UpdateCountry {
  code?: CountryCodeField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  cargoRequirement: TranslatableField;

  /** Translatable field (translation for `en` required) */
  currencyFullName: TranslatableField;
  flagFileId?: NullableUuidField;

  /** @example UAH */
  currencyShortName?: string;

  /** @example ₴ */
  currencySign?: string;

  /** Translatable field (translation for `en` required) */
  restrictionsDescription: TranslatableField;

  /** Internation phone code without additional chars like a plus sign or hyphen, only digits. Example for `American Samoa` correct value is `1684` instead `1-684`. */
  phoneCode?: CountryPhoneCodeField;
  enabled?: boolean;
  editVersion: EditVersionField;
}

export interface AccessDenied {
  /**
   * Error type
   * @example access_denied
   */
  error: 'access_denied';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
}

export interface ConflictTargetResourceUpdate {
  /**
   * Error type
   * @example conflict_target_resource_update
   */
  error: 'conflict_target_resource_update';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
}

/**
 * Error description that can be shown for user
 * @example Error description
 */
export type ErrorDescription = string;

export interface InternalServerError {
  /**
   * Error type
   * @example internal_server_error
   */
  error: 'internal_server_error';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
}

export interface InvalidJsonSchema {
  /**
   * Error type
   * @example invalid_json_schema
   */
  error: 'invalid_json_schema';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
  violations: { minLength?: { title?: object } };
  jsonSchema: object;
}

export interface InvalidRefreshToken {
  /**
   * Error type
   * @example invalid_refresh_token
   */
  error: 'invalid_refresh_token';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
}

export interface InvalidRequest {
  /**
   * Error type
   * @example invalid_request
   */
  error: 'invalid_request';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
}

export interface MalformedJson {
  /**
   * Error type
   * @example malformed_json
   */
  error: 'malformed_json';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
}

export interface ResourceNotFound {
  /**
   * Error type
   * @example resource_not_found
   */
  error: 'resource_not_found';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
}

export interface UnauthorizedUser {
  /**
   * Error type
   * @example unauthorised_user
   */
  error: 'unauthorised_user';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
}

export interface UnprocessableEntity {
  /**
   * Error type
   * @example invalid_entity
   */
  error: 'invalid_entity';

  /** Error description that can be shown for user */
  errorDescription: ErrorDescription;
  violations: {
    type: string;
    title: string;
    detail: string;
    violations: { propertyPath: string; title: string; type: string }[];
  };
}

export interface Blameable {
  id: UuidField;

  /**
   * @min 1
   * @max 254
   * @example admin1@test.com
   */
  email: string;
}

/**
 * @example UA
 */
export type CountryCodeField = string;

export interface CountryField {
  id: UuidField;
  code: CountryCodeField;

  /** Name of country in the requested language (see Accept-Language header). */
  name: string;
  flag: FileFieldOrNull;

  /** Internation phone code without additional chars like a plus sign or hyphen, only digits. Example for `American Samoa` correct value is `1684` instead `1-684`. */
  phoneCode: CountryPhoneCodeField;
}

/**
 * Internation phone code without additional chars like a plus sign or hyphen, only digits. Example for `American Samoa` correct value is `1684` instead `1-684`.
 * @example 380
 */
export type CountryPhoneCodeField = string;

/**
 * @example UAH
 */
export enum CurrencyField {
  UAH = 'UAH',
  USD = 'USD',
  EUR = 'EUR'
}

/**
 * @format date-time
 * @example 2020-02-20T20:00:00+00:00
 */
export type DateTimeField = string;

/**
 * @min 1
 * @example 1
 */
export type EditVersionField = number;

export interface FileField {
  id: UuidField;
  url: UrlField;

  /**
   * @min 200
   * @max 6000
   */
  width: number;

  /**
   * @min 200
   * @max 6000
   */
  height: number;

  /** @example image/jpeg */
  mimeType: 'image/png' | 'image/jpeg' | 'image/gif' | 'image/webp';
}

export interface FileFieldOrNull {
  id: UuidField;
  url: UrlField;

  /**
   * @min 200
   * @max 6000
   */
  width: number;

  /**
   * @min 200
   * @max 6000
   */
  height: number;

  /** @example image/jpeg */
  mimeType: 'image/png' | 'image/jpeg' | 'image/gif' | 'image/webp';
}

/**
 * @format float
 * @min 0
 * @example 100.1
 */
export type FloatField = number;

/**
 * @min 1
 * @example 100
 */
export type IntegerField = number;

export interface MoneyField {
  /**
   * In cents
   * @min 0
   * @max 4000000000
   * @example 100
   */
  amount: number;
  currency: CurrencyField;
}

export interface MoneyNullableField {
  /**
   * In cents
   * @min 0
   * @max 4000000000
   * @example 100
   */
  amount: number;
  currency: CurrencyField;
}

export interface ParentGroup {
  /** @example uk */
  id: string;

  /** @example some name */
  name: string;
  icon: FileFieldOrNull;
}

/**
 * Phone number in E164 format, e.g. +14842000101
 * @example +14842000101
 */
export type PhoneNumberField = string;

export interface SearchProductField {
  id: UuidField;

  /** @example some description */
  description: string;
  invoiceFillType:
    | 'empty'
    | 'products_list'
    | 'products_with_prices_list'
    | 'products_full_list';
  maxAmountForCustomsFreeRegistration: MoneyField;

  /** @example some description */
  descriptionOfCustomsRequirements: string;

  /** @example some description */
  descriptionOfCustomsDutyTax: string;

  /** @example some description */
  descriptionOfCustomsDutyVat: string;
  product?: {
    id: UuidField;
    name: string;
    fullNameForCustomer: string;
    shortNameForCustomer: string;
    customerTypes: ('business' | 'individual')[];
    fullDescriptionForCustomer: string | null;
    shortDescriptionForCustomer: string | null;
    promoUrl: string | null;
    largeBanner: FileFieldOrNull;
    smallBanner: FileFieldOrNull;
    icon: FileFieldOrNull;
    infoBlocks: {
      id: UuidField;
      name: string;
      shortName: string;
      description: string | null;
      smallIcon: FileFieldOrNull;
      largeIcon: FileFieldOrNull;
      priority: IntegerField;
    }[];
  };
}

export interface ServiceParent {
  /** @example uk */
  id: string;
  icon: FileFieldOrNull;
  fullName: string;
  shortName: string;
  enabled: boolean;
}

export interface ServiceProduct {
  /** @example uk */
  id: string;

  /** @example some name */
  name: string;
  icon: FileFieldOrNull;
  fullNameForCustomer: string;
  shortNameForCustomer: string;
  enabled: boolean;
}

/**
 * Translatable field (translation for `en` required)
 */
export type TranslatableField = { language: string; value: string }[];

/**
 * Translatable field (translation for `en` required)
 */
export type TranslatableFieldOrNull = {
  language: string;
  value: string | null;
}[];

/**
 * @example https://test.com/path
 */
export type UrlField = string;

/**
 * @example https://test.com/path
 */
export type UrlFieldOrNull = string | null;

/**
 * @example 123e4567-e89b-12d3-a456-426655440000
 */
export type UuidField = string;

/**
 * @example 123e4567-e89b-12d3-a456-426655440000
 */
export type NullableUuidField = string | null;

export interface LoginViaEmailAndPassword {
  /** @example admin1@test.com */
  email: string;

  /** @example Qwerty123 */
  password: string;
}

export interface CreateManufacturingMaterial {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
}

export interface ListManufacturingMaterialForAdmin {
  results: ManufacturingMaterialForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListManufacturingMaterialForAnonymousUser {
  results: ManufacturingMaterialForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface ManufacturingMaterialForAdmin {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface ManufacturingMaterialForAnonymousUser {
  id: UuidField;

  /** @example some field */
  name: string;
}

export interface UpdateManufacturingMaterial {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  editVersion: EditVersionField;
}

export interface CreateMovementVector {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** @example ua-pl */
  systemName: string;
  originCountryId: UuidField;
  destinationCountryId: UuidField;
}

export type ListForSearchDestinationCountriesAsAnonymous = CountryField[];

export type ListForSearchOriginCountriesAsAnonymous = CountryField[];

export interface ListMovementVectorForAdmin {
  results: MovementVectorForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListMovementVectorForAnonymousUser {
  results: MovementVectorForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export type ListMovementVectorLog = MovementVectorLog[];

export interface MovementVectorCountryInfo {
  id: UuidField;

  /** @example UA */
  code: string;

  /** @example Ukraine */
  name: string;
}

export interface MovementVectorForAdmin {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** @example ua-pl */
  systemName: string;
  originCountry: { id: UuidField; code: string; name: string };
  destinationCountry: { id: UuidField; code: string; name: string };
  status: 'active' | 'inactive' | 'blocked_for_new_shipments';
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface MovementVectorForAnonymousUser {
  id: UuidField;

  /** @example Ukraine - Poland */
  name: string;
  originCountry: { id: UuidField; code: string; name: string };
  destinationCountry: { id: UuidField; code: string; name: string };
  status: 'active' | 'inactive' | 'blocked_for_new_shipments';
}

export interface MovementVectorLog {
  version: EditVersionField;
  action: 'create' | 'update' | 'remove';
  admin: Blameable;
  data: { field?: string };
  loggedAt: DateTimeField;
}

export type MovementVectorMatrix = {
  originCountry: MovementVectorCountryInfo;
  destinationCountry: MovementVectorCountryInfo;
  movementVector: MovementVectorMatrixInfo;
}[][];

export interface MovementVectorMatrixInfo {
  id?: UuidField;

  /** @example ua-pl */
  systemName?: string;
  status?: 'active' | 'inactive' | 'blocked_for_new_shipments';
}

export type MovementVectorTree = {
  originCountry: MovementVectorCountryInfo;
  destinationCountries: {
    country: MovementVectorCountryInfo;
    movementVector: MovementVectorMatrixInfo;
  }[];
}[];

export interface UpdateMovementVector {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  status?: 'active' | 'inactive' | 'blocked_for_new_shipments';
  editVersion: EditVersionField;
}

export interface CreateMovementVectorPrice {
  basicServiceCost: MoneyField;
  increaseForJuristicPerson?: MoneyField;
  increaseForIndividualPerson?: MoneyField;
  cargoWeightFrom: FloatField;
  cargoWeightTo: FloatField;
  cargoVolumeFrom: FloatField;
  cargoVolumeTo: FloatField;
  cargoMaxLengthFrom: FloatField;
  cargoMaxLengthTo: FloatField;
  cargoVolumeWeightFrom: FloatField;
  cargoVolumeWeightTo: FloatField;
  estimatedPriceFrom: MoneyField;
  estimatedPriceTo: MoneyField;
}

export interface ListMovementVectorPriceForAdmin {
  results: MovementVectorPriceForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListMovementVectorPriceForAnonymousUser {
  results: MovementVectorPriceForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface MovementVectorPriceForAdmin {
  id: UuidField;
  basicServiceCost: MoneyField;
  increaseForJuristicPerson: MoneyField;
  increaseForIndividualPerson: MoneyField;
  cargoWeightFrom: FloatField;
  cargoWeightTo: FloatField;
  cargoVolumeFrom: FloatField;
  cargoVolumeTo: FloatField;
  cargoMaxLengthFrom: FloatField;
  cargoMaxLengthTo: FloatField;
  cargoVolumeWeightFrom: FloatField;
  cargoVolumeWeightTo: FloatField;
  estimatedPriceFrom: MoneyField;
  estimatedPriceTo: MoneyField;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface MovementVectorPriceForAnonymousUser {
  id: UuidField;
  basicServiceCost: MoneyField;
  increaseForJuristicPerson: MoneyField;
  increaseForIndividualPerson: MoneyField;
  cargoWeightFrom: FloatField;
  cargoWeightTo: FloatField;
  cargoVolumeFrom: FloatField;
  cargoVolumeTo: FloatField;
  cargoMaxLengthFrom: FloatField;
  cargoMaxLengthTo: FloatField;
  cargoVolumeWeightFrom: FloatField;
  cargoVolumeWeightTo: FloatField;
  estimatedPriceFrom: MoneyField;
  estimatedPriceTo: MoneyField;
}

export interface UpdateMovementVectorPrice {
  basicServiceCost?: MoneyField;
  increaseForJuristicPerson?: MoneyField;
  increaseForIndividualPerson?: MoneyField;
  cargoWeightFrom?: FloatField;
  cargoWeightTo?: FloatField;
  cargoVolumeFrom?: FloatField;
  cargoVolumeTo?: FloatField;
  cargoMaxLengthFrom?: FloatField;
  cargoMaxLengthTo?: FloatField;
  cargoVolumeWeightFrom?: FloatField;
  cargoVolumeWeightTo?: FloatField;
  estimatedPriceFrom?: MoneyField;
  estimatedPriceTo?: MoneyField;
  editVersion: EditVersionField;
}

export interface CreateMovementVectorProduct {
  movementVectorId: UuidField;
  productId: UuidField;

  /** @example some description */
  description?: string;

  /** @example true */
  enabled?: boolean;
  invoiceFillType?:
    | 'empty'
    | 'products_list'
    | 'products_with_prices_list'
    | 'products_full_list';
  maxAmountForCustomsFreeRegistration?: MoneyField;

  /** @example some description */
  descriptionOfCustomsRequirements?: string;

  /** @example some description */
  descriptionOfCustomsDutyTax?: string;

  /** @example some description */
  descriptionOfCustomsDutyVat?: string;
}

export interface ListMovementVectorProductForAdmin {
  results: MovementVectorProductForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListMovementVectorProductForAnonymousUser {
  results: MovementVectorProductForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface MovementVectorProductForAdmin {
  id: UuidField;
  movementVectorId: NullableUuidField;
  productId: UuidField;

  /** @example some description */
  description: string;

  /** @example true */
  enabled: boolean;
  invoiceFillType:
    | 'empty'
    | 'products_list'
    | 'products_with_prices_list'
    | 'products_full_list';
  maxAmountForCustomsFreeRegistration: MoneyField;

  /** @example some description */
  descriptionOfCustomsRequirements: string;

  /** @example some description */
  descriptionOfCustomsDutyTax: string;

  /** @example some description */
  descriptionOfCustomsDutyVat: string;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface MovementVectorProductForAnonymousUser {
  id: UuidField;
  movementVectorId: NullableUuidField;
  productId: UuidField;
  invoiceFillType:
    | 'empty'
    | 'products_list'
    | 'products_with_prices_list'
    | 'products_full_list';
  maxAmountForCustomsFreeRegistration: MoneyField;

  /** @example some description */
  descriptionOfCustomsRequirements: string;

  /** @example some description */
  descriptionOfCustomsDutyTax: string;

  /** @example some description */
  descriptionOfCustomsDutyVat: string;
}

export interface UpdateMovementVectorProduct {
  /** @example some description */
  description?: string;

  /** @example true */
  enabled?: boolean;
  invoiceFillType?:
    | 'empty'
    | 'products_list'
    | 'products_with_prices_list'
    | 'products_full_list';
  maxAmountForCustomsFreeRegistration?: MoneyField;

  /** @example some description */
  descriptionOfCustomsRequirements?: string;

  /** @example some description */
  descriptionOfCustomsDutyTax?: string;

  /** @example some description */
  descriptionOfCustomsDutyVat?: string;
  editVersion: EditVersionField;
}

export interface CreateMovementVectorRoute {
  type:
    | 'fm'
    | 'fm2css'
    | 'css_sender'
    | 'css2ca'
    | 'cust_decl'
    | 'lh'
    | 'cast_clear'
    | 'ca2css'
    | 'css_receiver'
    | 'css2lm'
    | 'lm';
  providerId: UuidField;
  originCountryId: UuidField;
  originStockId?: NullableUuidField;
  destinationCountryId: UuidField;
  destinationStockId?: NullableUuidField;

  /** @example 120 */
  minExecutionTimeInMinutes?: int | null;

  /** @example 220 */
  maxExecutionTimeInMinutes?: int | null;

  /** @example some description */
  description?: string | null;

  /** @example true */
  enabled: boolean;
}

export interface ListMovementVectorRouteForAdmin {
  results: MovementVectorRouteForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListMovementVectorRouteForAnonymousUser {
  results: MovementVectorRouteForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface MovementVectorRouteForAdmin {
  id: UuidField;
  type:
    | 'fm'
    | 'fm2css'
    | 'css_sender'
    | 'css2ca'
    | 'cust_decl'
    | 'lh'
    | 'cast_clear'
    | 'ca2css'
    | 'css_receiver'
    | 'css2lm'
    | 'lm';
  provider?: { id: UuidField; systemLegalName: string | null };
  originCountry?: { id: UuidField; code: string };
  originStockId: NullableUuidField;
  destinationCountry?: { id: UuidField; code: string };
  destinationStockId: NullableUuidField;

  /** @example 120 */
  minExecutionTimeInMinutes: int | null;

  /** @example 220 */
  maxExecutionTimeInMinutes: int | null;

  /** @example some description */
  description: string | null;

  /** @example true */
  enabled: boolean;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface MovementVectorRouteForAnonymousUser {
  id: UuidField;
  type:
    | 'fm'
    | 'fm2css'
    | 'css_sender'
    | 'css2ca'
    | 'cust_decl'
    | 'lh'
    | 'cast_clear'
    | 'ca2css'
    | 'css_receiver'
    | 'css2lm'
    | 'lm';
  provider?: { id: UuidField; systemLegalName: string | null };
  originCountry?: { id: UuidField; code: string };
  originStockId: NullableUuidField;
  destinationCountry?: { id: UuidField; code: string };
  destinationStockId: NullableUuidField;

  /** @example 120 */
  minExecutionTimeInMinutes: int | null;

  /** @example 220 */
  maxExecutionTimeInMinutes: int | null;

  /** @example some description */
  description: string | null;
}

export interface UpdateMovementVectorRoute {
  type?:
    | 'fm'
    | 'fm2css'
    | 'css_sender'
    | 'css2ca'
    | 'cust_decl'
    | 'lh'
    | 'cast_clear'
    | 'ca2css'
    | 'css_receiver'
    | 'css2lm'
    | 'lm';
  providerId?: UuidField;
  originCountryId?: UuidField;
  originStockId?: NullableUuidField;
  destinationCountryId?: UuidField;
  destinationStockId?: NullableUuidField;

  /** @example 120 */
  minExecutionTimeInMinutes?: int | null;

  /** @example 220 */
  maxExecutionTimeInMinutes?: int | null;

  /** @example some description */
  description?: string | null;

  /** @example true */
  enabled?: boolean;
  editVersion: EditVersionField;
}

export interface CreatePackaging {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  providerId: UuidField;

  /** Translatable field (translation for `en` required) */
  fullDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;
  photoFileId?: NullableUuidField;
  iconFileId?: NullableUuidField;

  /** @example suggest_always */
  representation: 'suggest_always' | 'suggest_by_size';
  outerLength: IntegerField;
  outerWidth: IntegerField;
  outerHeight: IntegerField;
  innerLength: IntegerField;
  innerWidth: IntegerField;
  innerHeight: IntegerField;

  /** Translatable field (translation for `en` required) */
  materialDescription: TranslatableFieldOrNull;
  customerCost: MoneyField;
  purchaseCost: MoneyField;
  priority: IntegerField;
}

export type ListForSearchPackagingAsAnonymousUser =
  SearchPackagingForAnonymousUser[];

export interface ListPackagingForAdmin {
  results: PackagingForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListPackagingForAnonymousUser {
  results: PackagingForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface PackagingForAdmin {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;
  photo: FileFieldOrNull;
  icon: FileFieldOrNull;
  provider: {
    id?: UuidField;
    systemName?: TranslatableField;
    logo?: FileField;
  };

  /** @example suggest_always */
  representation: 'suggest_always' | 'suggest_by_size';
  outerLength: IntegerField;
  outerWidth: IntegerField;
  outerHeight: IntegerField;
  innerLength: IntegerField;
  innerWidth: IntegerField;
  innerHeight: IntegerField;

  /** Translatable field (translation for `en` required) */
  materialDescription: TranslatableFieldOrNull;
  customerCost: MoneyField;
  purchaseCost: MoneyField;
  priority: IntegerField;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface PackagingForAnonymousUser {
  id: UuidField;

  /** @example Международная доставка */
  name: string;

  /** @example null */
  fullDescriptionForCustomer: string | null;

  /** @example null */
  shortDescriptionForCustomer: string | null;
  photo: FileFieldOrNull;
  icon: FileFieldOrNull;
  provider: { id?: UuidField; systemName?: string; logo?: FileField };

  /** @example suggest_always */
  representation: 'suggest_always' | 'suggest_by_size';
  outerLength: IntegerField;
  outerWidth: IntegerField;
  outerHeight: IntegerField;
  innerLength: IntegerField;
  innerWidth: IntegerField;
  innerHeight: IntegerField;

  /**
   * Restrictions and customer preferences
   * @example null
   */
  materialDescription: string | null;
  customerCost: MoneyField;
  purchaseCost: MoneyField;
  priority: IntegerField;
}

export interface SearchPackagingForAnonymousUser {
  id: UuidField;
  name: string;

  /** @example null */
  fullDescriptionForCustomer: string | null;

  /** @example null */
  shortDescriptionForCustomer: string | null;
  photo: FileFieldOrNull;
  icon: FileFieldOrNull;
  provider: { id?: UuidField; systemName?: string; logo?: FileField };

  /** @example suggest_always */
  representation: 'suggest_always' | 'suggest_by_size';
  outerLength: IntegerField;
  outerWidth: IntegerField;
  outerHeight: IntegerField;
  innerLength: IntegerField;
  innerWidth: IntegerField;
  innerHeight: IntegerField;

  /** @example null */
  materialDescription: string | null;
  customerCost: MoneyField;
  priority: IntegerField;
}

export interface UpdatePackaging {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  providerId?: UuidField;

  /** Translatable field (translation for `en` required) */
  fullDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;
  photoFileId?: NullableUuidField;
  iconFileId?: NullableUuidField;

  /** @example suggest_always */
  representation?: 'suggest_always' | 'suggest_by_size';
  outerLength?: IntegerField;
  outerWidth?: IntegerField;
  outerHeight?: IntegerField;
  innerLength?: IntegerField;
  innerWidth?: IntegerField;
  innerHeight?: IntegerField;

  /** Translatable field (translation for `en` required) */
  materialDescription: TranslatableFieldOrNull;
  customerCost?: MoneyField;
  purchaseCost?: MoneyField;
  priority?: IntegerField;
  editVersion: EditVersionField;
}

export interface CreateProduct {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortNameForCustomer: TranslatableField;

  /** @example ["individual"] */
  customerTypes: ('business' | 'individual')[];

  /** Translatable field (translation for `en` required) */
  fullDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  promoUrl: TranslatableFieldOrNull;
  largeBannerFileId?: NullableUuidField;
  smallBannerFileId?: NullableUuidField;
  iconFileId?: NullableUuidField;

  /** @example true */
  enabled: boolean;
}

export type ListForSearchProducts = SearchProductField[];

export interface ListProductForAdmin {
  results: ProductForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListProductForAnonymousUser {
  results: ProductForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface ProductForAdmin {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortNameForCustomer: TranslatableField;

  /** @example ["individual"] */
  customerTypes: ('business' | 'individual')[];

  /** Translatable field (translation for `en` required) */
  fullDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  promoUrl: TranslatableFieldOrNull;
  largeBanner: FileFieldOrNull;
  smallBanner: FileFieldOrNull;
  icon: FileFieldOrNull;

  /** @example true */
  enabled: boolean;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface ProductForAnonymousUser {
  id: UuidField;

  /** @example Международная доставка */
  name: string;

  /** @example Международная доставка */
  fullNameForCustomer: string;

  /** @example Международная доставка */
  shortNameForCustomer: string;

  /**
   * Формат клиента
   * @example ["individual"]
   */
  customerTypes: ('business' | 'individual')[];

  /**
   * Описание продукта для клиента
   * @example null
   */
  fullDescriptionForCustomer: string | null;

  /**
   * Короткое продукта для клиента
   * @example null
   */
  shortDescriptionForCustomer: string | null;

  /** Ссылка на промо-страницу продукта */
  promoUrl: string | null;
  largeBanner: FileFieldOrNull;
  smallBanner: FileFieldOrNull;
  icon: FileFieldOrNull;

  /**
   * Признак активности продукта
   * @example true
   */
  enabled: boolean;
}

export interface UpdateProduct {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortNameForCustomer: TranslatableField;

  /** @example ["individual"] */
  customerTypes?: ('business' | 'individual')[];

  /** Translatable field (translation for `en` required) */
  fullDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  promoUrl: TranslatableFieldOrNull;
  largeBannerFileId?: NullableUuidField;
  smallBannerFileId?: NullableUuidField;
  iconFileId?: NullableUuidField;

  /** @example true */
  enabled?: boolean;
  editVersion: EditVersionField;
}

export interface CreateProductInfoBlock {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
  smallIconFileId: NullableUuidField;
  largeIconFileId: NullableUuidField;

  /** @example true */
  enabled: boolean;
  priority: IntegerField;
}

export interface ListProductInfoBlockForAdmin {
  results: ProductInfoBlockForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListProductInfoBlockForAnonymousUser {
  results: ProductInfoBlockForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface ProductInfoBlockForAdmin {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
  smallIcon: FileFieldOrNull;
  largeIcon: FileFieldOrNull;

  /** @example true */
  enabled: boolean;
  priority: IntegerField;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface ProductInfoBlockForAnonymousUser {
  id: UuidField;

  /** @example Name */
  name: string;

  /** @example Short name */
  shortName: string;

  /** @example null */
  description: string | null;
  smallIcon: FileFieldOrNull;
  largeIcon: FileFieldOrNull;
  priority: IntegerField;
}

export interface UpdateProductInfoBlock {
  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
  smallIconFileId?: NullableUuidField;
  largeIconFileId?: NullableUuidField;

  /** @example true */
  enabled?: boolean;
  priority?: IntegerField;
  editVersion?: EditVersionField;
}

export interface CreateProductionCountry {
  /** @example UA */
  code: string;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  flagFileId?: NullableUuidField;
  priority: number;
  enabled?: boolean;
}

export interface ListProductionCountryForAnonymousUser {
  results: ProductionCountryForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface ListProductionCountryForAdmin {
  results: ProductionCountryForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ProductionCountryForAdmin {
  id: UuidField;

  /** @example UA */
  code: string;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  flag: FileFieldOrNull;
  priority: number;

  /**
   * Признак активности продукта
   * @example true
   */
  enabled: boolean;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface ProductionCountryForAnonymousUser {
  id: UuidField;

  /** @example UA */
  code: string;
  name: string;
  flag: FileFieldOrNull;
}

export interface UpdateProductionCountry {
  /** @example UA */
  code?: string;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  priority?: number;
  flagFileId?: NullableUuidField;
  enabled?: boolean;
  editVersion: EditVersionField;
}

export interface CreateProvider {
  /** Translatable field (translation for `en` required) */
  systemName: TranslatableField;
  systemLegalName: string;

  /** Translatable field (translation for `en` required) */
  fullNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;
  logoFileId: UuidField;
  countryIds: UuidField[];

  /** Phone number in E164 format, e.g. +14842000101 */
  phoneNumber: PhoneNumberField;

  /** @example ["cash_to_courier"] */
  paymentTypes: (
    | 'cash_in_office'
    | 'cashless_in_office'
    | 'online_service_payment'
    | 'cash_to_courier'
    | 'cashless_to_courier'
    | 'cashless_in_post_machine'
  )[];

  /** @example ["post_office"] */
  cargoReceptionTypes: ('post_office' | 'post_machine' | 'courier' | 'pudo')[];

  /** @example ["post_office"] */
  cargoIssuanceTypes: ('post_office' | 'post_machine' | 'courier' | 'pudo')[];

  /** @example true */
  enabled: boolean;
}

export interface ListProviderForAdmin {
  results: ProviderForAdmin[];
  metadata: ListMetadataWithOffset;
}

export interface ListProviderForAnonymousUser {
  results: ProviderForAnonymousUser[];
  metadata: ListMetadataWithOffset;
}

export interface ProviderForAdmin {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  systemName: TranslatableField;
  systemLegalName: string;

  /** Translatable field (translation for `en` required) */
  fullNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;
  logo: FileField;
  countryIds: UuidField[];

  /** Phone number in E164 format, e.g. +14842000101 */
  phoneNumber: PhoneNumberField;

  /** @example ["cash_to_courier"] */
  paymentTypes: (
    | 'cash_in_office'
    | 'cashless_in_office'
    | 'online_service_payment'
    | 'cash_to_courier'
    | 'cashless_to_courier'
    | 'cashless_in_post_machine'
  )[];

  /** @example ["post_office"] */
  cargoReceptionTypes: ('post_office' | 'post_machine' | 'courier' | 'pudo')[];

  /** @example ["post_office"] */
  cargoIssuanceTypes: ('post_office' | 'post_machine' | 'courier' | 'pudo')[];

  /** @example true */
  enabled: boolean;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface ProviderForAnonymousUser {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  fullNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortNameForCustomer: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer: TranslatableFieldOrNull;
  logo: FileField;
  countryIds: UuidField[];

  /** Phone number in E164 format, e.g. +14842000101 */
  phoneNumber: PhoneNumberField;

  /** @example ["cash_to_courier"] */
  paymentTypes: (
    | 'cash_in_office'
    | 'cashless_in_office'
    | 'online_service_payment'
    | 'cash_to_courier'
    | 'cashless_to_courier'
    | 'cashless_in_post_machine'
  )[];

  /** @example ["post_office"] */
  cargoReceptionTypes: ('post_office' | 'post_machine' | 'courier' | 'pudo')[];

  /** @example ["post_office"] */
  cargoIssuanceTypes: ('post_office' | 'post_machine' | 'courier' | 'pudo')[];

  /**
   * Признак активности продукта
   * @example true
   */
  enabled: boolean;
}

export interface UpdateProvider {
  /** Translatable field (translation for `en` required) */
  systemName?: TranslatableField;
  systemLegalName?: string;

  /** Translatable field (translation for `en` required) */
  fullNameForCustomer?: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortNameForCustomer?: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortDescriptionForCustomer?: TranslatableFieldOrNull;
  logoFileId?: UuidField;
  countryIds?: UuidField[];

  /** Phone number in E164 format, e.g. +14842000101 */
  phoneNumber?: PhoneNumberField;

  /** @example ["cash_to_courier"] */
  paymentTypes?: (
    | 'cash_in_office'
    | 'cashless_in_office'
    | 'online_service_payment'
    | 'cash_to_courier'
    | 'cashless_to_courier'
    | 'cashless_in_post_machine'
  )[];

  /** @example ["post_office"] */
  cargoReceptionTypes?: ('post_office' | 'post_machine' | 'courier' | 'pudo')[];

  /** @example ["post_office"] */
  cargoIssuanceTypes?: ('post_office' | 'post_machine' | 'courier' | 'pudo')[];

  /** @example true */
  enabled?: boolean;
  editVersion: EditVersionField;
}

export interface CreateService {
  /** Translatable field (translation for `en` required) */
  systemName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  promoUrl?: TranslatableFieldOrNull;

  /** @example ["individual"] */
  customerTypes: ('business' | 'individual')[];
  largeBannerFileId?: NullableUuidField;
  smallBannerFileId?: NullableUuidField;
  iconFileId?: NullableUuidField;
  parentId?: NullableUuidField;
  productId: UuidField;
  enabled?: boolean;
}

export interface ListServiceForAdmin {
  results: ServiceForAdminList[];
  metadata: ListMetadataWithOffset;
}

export interface ListServiceForAnonymousUser {
  results: ServiceForAnonymousUserList[];
  metadata: ListMetadataWithOffset;
}

export interface ServiceForAdminList {
  id: UuidField;
  icon: FileFieldOrNull;
  systemName: string;
  shortName: string;
  fullName: string;
  enabled: boolean;
  product: ServiceProduct;
  parent: ServiceParent;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface ServiceForAdminView {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  systemName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullName: TranslatableField;
  enabled: boolean;
  product: ServiceProduct;
  parent: ServiceParent;
  largeBanner: FileFieldOrNull;
  smallBanner: FileFieldOrNull;
  icon: FileFieldOrNull;

  /** Translatable field (translation for `en` required) */
  promoUrl: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableFieldOrNull;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface ServiceForAnonymousUserList {
  id: UuidField;
  icon: FileFieldOrNull;
  shortName: string;
  fullName: string;
  product: ServiceProduct;
}

export interface ServiceForAnonymousUserView {
  id: UuidField;
  shortName: string;
  fullName: string;
  product: ServiceProduct;
  parent: ServiceParent;
  largeBanner: FileFieldOrNull;
  smallBanner: FileFieldOrNull;
  icon: FileFieldOrNull;
  promoUrl: UrlFieldOrNull;
  shortDescription: string;
  fullDescription: string;
}

export interface UpdateService {
  /** Translatable field (translation for `en` required) */
  systemName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  shortName: TranslatableField;

  /** Translatable field (translation for `en` required) */
  fullDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  shortDescription: TranslatableFieldOrNull;

  /** Translatable field (translation for `en` required) */
  promoUrl?: TranslatableFieldOrNull;

  /** @example ["individual"] */
  customerTypes?: ('business' | 'individual')[];
  largeBannerFileId?: NullableUuidField;
  smallBannerFileId?: NullableUuidField;
  iconFileId?: NullableUuidField;
  parentId?: NullableUuidField;
  productId?: UuidField;
  enabled?: boolean;
  editVersion: EditVersionField;
}

export interface CreateServiceType {
  systemName: string;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
}

export interface ListServiceTypeForAdmin {
  results: ServiceTypeForAdminList[];
  metadata: ListMetadataWithOffset;
}

export interface ServiceTypeForAdmin {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  systemName: string;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
  editVersion: EditVersionField;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface ServiceTypeForAdminList {
  id: UuidField;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;
  systemName: string;
  createdBy: Blameable;
  updatedBy: Blameable;
  createdAt: DateTimeField;
  updatedAt: DateTimeField;
}

export interface UpdateServiceType {
  systemName?: string;

  /** Translatable field (translation for `en` required) */
  name: TranslatableField;

  /** Translatable field (translation for `en` required) */
  description: TranslatableFieldOrNull;
  editVersion: EditVersionField;
}

import { http } from './config';

/**
 * @title Nova Poshta Global API Documentation
 * @version 1.0.0
 * @baseUrl https://api.npg-api-core.stg.stfalcon.com/api/v1.0
 */

const routesConfig = http.createRoutesConfig({
  cargos: {
    /**
     * No description
     *
     * @tags Cargo
     * @name CreateCargo
     * @summary Create cargo
     * @request POST:/cargos
     * @secure
     */
    createCargo: http.createRoute<CreateCargo, CargoForAdminView[]>({
      url: `/cargos`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Cargo
     * @name GetCargos
     * @summary Get list of cargos
     * @request GET:/cargos
     * @secure
     */
    getCargos: http.createRoute<
      { offset?: number; limit?: number; name?: string },
      ListCargoForAdmin | ListCargoForAnonymousUser
    >({
      url: `/cargos`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Cargo
     * @name DeleteCargo
     * @summary Delete cargo
     * @request DELETE:/cargos/{id}
     * @secure
     */
    deleteCargo: http.createRoute<string, void>(id => ({
      url: `/cargos/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Cargo
     * @name GetCargoInfo
     * @summary Get cargo info
     * @request GET:/cargos/{id}
     * @secure
     */
    getCargoInfo: http.createRoute<
      string,
      CargoForAdminView | CargoForAnonymousUserView
    >(id => ({
      url: `/cargos/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Cargo
     * @name UpdateCargo
     * @summary Update cargo
     * @request PUT:/cargos/{id}
     * @secure
     */
    updateCargo: http.createRoute<
      { id: string; data: UpdateCargo },
      CargoForAdminView
    >(dto => ({
      url: `/cargos/${dto.id}`,
      method: 'PUT',
      data: dto.data
    })),

    /**
     * @description Get list of cargos with filter for cargos and cargo group
     *
     * @tags Cargo
     * @name GetCargosSearch
     * @summary Get cargos search list
     * @request GET:/cargos/search
     * @secure
     */
    getCargosSearch: http.createRoute<
      { offset?: number; limit?: number; name?: string },
      ListCargoSearch
    >({
      url: `/cargos/search`,
      method: 'GET'
    })
  },
  cargoGroups: {
    /**
     * No description
     *
     * @tags Cargo Group
     * @name CreateCargoGroup
     * @summary Create cargo group
     * @request POST:/cargo-groups
     * @secure
     */
    createCargoGroup: http.createRoute<
      CreateCargoGroup,
      CargoGroupForAdminView[]
    >({
      url: `/cargo-groups`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Cargo Group
     * @name GetCargoGroups
     * @summary Get list of cargo groups
     * @request GET:/cargo-groups
     * @secure
     */
    getCargoGroups: http.createRoute<
      { offset?: number; limit?: number; name?: string },
      ListCargoGroupForAdmin | ListCargoGroupForAnonymousUser
    >({
      url: `/cargo-groups`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Cargo Group
     * @name DeleteCargoGroup
     * @summary Delete cargo group
     * @request DELETE:/cargo-groups/{id}
     * @secure
     */
    deleteCargoGroup: http.createRoute<string, void>(id => ({
      url: `/cargo-groups/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Cargo Group
     * @name GetCargoGroupInfo
     * @summary Get cargo group info
     * @request GET:/cargo-groups/{id}
     * @secure
     */
    getCargoGroupInfo: http.createRoute<
      string,
      CargoGroupForAdminView | CargoGroupForAnonymousUserView
    >(id => ({
      url: `/cargo-groups/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Cargo Group
     * @name UpdateCargoGroup
     * @summary Update cargo group
     * @request PUT:/cargo-groups/{id}
     * @secure
     */
    updateCargoGroup: http.createRoute<
      { id: string; data: UpdateCargoGroup },
      CargoGroupForAdminView
    >(dto => ({
      url: `/cargo-groups/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  cargoParameters: {
    /**
     * No description
     *
     * @tags Cargo Parameters
     * @name CreateCargoParameters
     * @summary Create cargo parameters
     * @request POST:/cargo-parameters
     * @secure
     */
    createCargoParameters: http.createRoute<
      CreateCargoParameters,
      CargoParametersForAdmin[]
    >({
      url: `/cargo-parameters`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Cargo Parameters
     * @name GetCargoParameters
     * @summary Get list of cargo parameters
     * @request GET:/cargo-parameters
     * @secure
     */
    getCargoParameters: http.createRoute<
      { offset?: number; limit?: number },
      ListCargoParametersForAdmin | ListCargoParametersForAnonymousUser
    >({
      url: `/cargo-parameters`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Cargo Parameters
     * @name DeleteCargoParameters
     * @summary Delete cargo parameters
     * @request DELETE:/cargo-parameters/{id}
     * @secure
     */
    deleteCargoParameters: http.createRoute<string, void>(id => ({
      url: `/cargo-parameters/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Cargo Parameters
     * @name GetCargoParametersInfo
     * @summary Get cargo parameters info
     * @request GET:/cargo-parameters/{id}
     * @secure
     */
    getCargoParametersInfo: http.createRoute<
      string,
      CargoParametersForAdmin | CargoParametersForAnonymousUser
    >(id => ({
      url: `/cargo-parameters/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Cargo Parameters
     * @name UpdateCargoParameters
     * @summary Update cargo parameters
     * @request PUT:/cargo-parameters/{id}
     * @secure
     */
    updateCargoParameters: http.createRoute<
      { id: string; data: UpdateCargoParameters },
      CargoParametersForAdmin
    >(dto => ({
      url: `/cargo-parameters/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  cargoSpaceTypes: {
    /**
     * No description
     *
     * @tags Cargo Space Type
     * @name CreateCargoSpaceType
     * @summary Create cargo space type
     * @request POST:/cargo-space-types
     * @secure
     */
    createCargoSpaceType: http.createRoute<
      CreateCargoSpaceType,
      CargoSpaceTypeForAdmin[]
    >({
      url: `/cargo-space-types`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Cargo Space Type
     * @name GetCargoSpaceTypes
     * @summary Get list of cargo space types
     * @request GET:/cargo-space-types
     * @secure
     */
    getCargoSpaceTypes: http.createRoute<
      { offset?: number; limit?: number },
      ListCargoSpaceTypeForAdmin | ListCargoSpaceTypeForAnonymousUser
    >({
      url: `/cargo-space-types`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Cargo Space Type
     * @name DeleteCargoSpaceType
     * @summary Delete cargo space type
     * @request DELETE:/cargo-space-types/{id}
     * @secure
     */
    deleteCargoSpaceType: http.createRoute<string, void>(id => ({
      url: `/cargo-space-types/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Cargo Space Type
     * @name GetCargoSpaceTypeInfo
     * @summary Get cargo space type info
     * @request GET:/cargo-space-types/{id}
     * @secure
     */
    getCargoSpaceTypeInfo: http.createRoute<
      string,
      CargoSpaceTypeForAdmin | CargoSpaceTypeForAnonymousUser
    >(id => ({
      url: `/cargo-space-types/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Cargo Space Type
     * @name UpdateCargoSpaceType
     * @summary Update cargo space type
     * @request PUT:/cargo-space-types/{id}
     * @secure
     */
    updateCargoSpaceType: http.createRoute<
      { id: string; data: UpdateCargoSpaceType },
      CargoSpaceTypeForAdmin
    >(dto => ({
      url: `/cargo-space-types/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  countries: {
    /**
     * No description
     *
     * @tags Country
     * @name CreateCountry
     * @summary Create country
     * @request POST:/countries
     * @secure
     */
    createCountry: http.createRoute<CreateCountry, CountryForAdmin[]>({
      url: `/countries`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Country
     * @name GetCountries
     * @summary Get list of countries
     * @request GET:/countries
     * @secure
     */
    getCountries: http.createRoute<
      { offset?: number; limit?: number },
      ListCountryForAdmin | ListCountryForAnonymousUser
    >({
      url: `/countries`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Country
     * @name DeleteCountry
     * @summary Delete country
     * @request DELETE:/countries/{id}
     * @secure
     */
    deleteCountry: http.createRoute<string, void>(id => ({
      url: `/countries/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Country
     * @name GetCountryInfo
     * @summary Get country info
     * @request GET:/countries/{id}
     * @secure
     */
    getCountryInfo: http.createRoute<
      string,
      CountryForAdmin | CountryForAnonymousUser
    >(id => ({
      url: `/countries/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Country
     * @name UpdateCountry
     * @summary Update country
     * @request PUT:/countries/{id}
     * @secure
     */
    updateCountry: http.createRoute<
      { id: string; data: UpdateCountry },
      CountryForAdmin
    >(dto => ({
      url: `/countries/${dto.id}`,
      method: 'PUT',
      data: dto.data
    })),

    /**
     * @description Search countries by name dependent on user language ordered by ascending
     *
     * @tags Country
     * @name SearchCountriesAction
     * @summary Search countries
     * @request GET:/countries/search
     * @secure
     */
    searchCountriesAction: http.createRoute<
      { name?: string },
      ListForSearchCountriesAsAnonymous
    >({
      url: `/countries/search`,
      method: 'GET'
    })
  },
  files: {
    /**
     * No description
     *
     * @tags File
     * @name UploadNewFile
     * @summary Upload file
     * @request POST:/files
     * @secure
     */
    uploadNewFile: http.createRoute<{ file?: File }, FileField>({
      url: `/files`,
      method: 'POST',
      formData: true
    }),

    /**
     * No description
     *
     * @tags File
     * @name ViewFile
     * @summary View file
     * @request GET:/files/{id}
     */
    viewFile: http.createRoute<string, FileField>(id => ({
      url: `/files/${id}`,
      method: 'GET'
    }))
  },
  login: {
    /**
     * No description
     *
     * @tags Login & Logout
     * @name LoginAdminViaEmailAndPassword
     * @summary Login admin via email and password
     * @request POST:/login/admin
     * @secure
     */
    loginAdminViaEmailAndPassword: http.createRoute<
      LoginViaEmailAndPassword,
      Token
    >({
      url: `/login/admin`,
      method: 'POST'
    })
  },
  logout: {
    /**
     * No description
     *
     * @tags Login & Logout
     * @name Logout
     * @summary Logout
     * @request POST:/logout
     * @secure
     */
    logout: http.createRoute<void, void>({
      url: `/logout`,
      method: 'POST'
    })
  },
  manufacturingMaterials: {
    /**
     * No description
     *
     * @tags Manufacturing Material
     * @name CreateManufacturingMaterial
     * @summary Create manufacturing material
     * @request POST:/manufacturing-materials
     * @secure
     */
    createManufacturingMaterial: http.createRoute<
      CreateManufacturingMaterial,
      ManufacturingMaterialForAdmin[]
    >({
      url: `/manufacturing-materials`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Manufacturing Material
     * @name GetManufacturingMaterials
     * @summary Get list of manufacturing materials
     * @request GET:/manufacturing-materials
     * @secure
     */
    getManufacturingMaterials: http.createRoute<
      { offset?: number; limit?: number; name?: string },
      | ListManufacturingMaterialForAdmin
      | ListManufacturingMaterialForAnonymousUser
    >({
      url: `/manufacturing-materials`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Manufacturing Material
     * @name DeleteManufacturingMaterial
     * @summary Delete manufacturing material
     * @request DELETE:/manufacturing-materials/{id}
     * @secure
     */
    deleteManufacturingMaterial: http.createRoute<string, void>(id => ({
      url: `/manufacturing-materials/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Manufacturing Material
     * @name GetManufacturingMaterialInfo
     * @summary Get manufacturing material info
     * @request GET:/manufacturing-materials/{id}
     * @secure
     */
    getManufacturingMaterialInfo: http.createRoute<
      string,
      ManufacturingMaterialForAdmin | ManufacturingMaterialForAnonymousUser
    >(id => ({
      url: `/manufacturing-materials/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Manufacturing Material
     * @name UpdateManufacturingMaterial
     * @summary Update manufacturing material
     * @request PUT:/manufacturing-materials/{id}
     * @secure
     */
    updateManufacturingMaterial: http.createRoute<
      { id: string; data: UpdateManufacturingMaterial },
      ManufacturingMaterialForAdmin
    >(dto => ({
      url: `/manufacturing-materials/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  movementVectors: {
    /**
     * No description
     *
     * @tags Movement Vector
     * @name CreateMovementVector
     * @summary Create movement vector
     * @request POST:/movement-vectors
     * @secure
     */
    createMovementVector: http.createRoute<
      CreateMovementVector,
      MovementVectorForAdmin[]
    >({
      url: `/movement-vectors`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Movement Vector
     * @name GetMovementVectors
     * @summary Get list of movement vectors
     * @request GET:/movement-vectors
     * @secure
     */
    getMovementVectors: http.createRoute<
      { offset?: number; limit?: number },
      ListMovementVectorForAdmin | ListMovementVectorForAnonymousUser
    >({
      url: `/movement-vectors`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Movement Vector
     * @name DeleteMovementVector
     * @summary Delete movement vector
     * @request DELETE:/movement-vectors/{id}
     * @secure
     */
    deleteMovementVector: http.createRoute<string, void>(id => ({
      url: `/movement-vectors/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Movement Vector
     * @name GetMovementVectorInfo
     * @summary Get movement vector info
     * @request GET:/movement-vectors/{id}
     * @secure
     */
    getMovementVectorInfo: http.createRoute<
      string,
      MovementVectorForAdmin | MovementVectorForAnonymousUser
    >(id => ({
      url: `/movement-vectors/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Movement Vector
     * @name UpdateMovementVector
     * @summary Update movement vector
     * @request PUT:/movement-vectors/{id}
     * @secure
     */
    updateMovementVector: http.createRoute<
      { id: string; data: UpdateMovementVector },
      MovementVectorForAdmin
    >(dto => ({
      url: `/movement-vectors/${dto.id}`,
      method: 'PUT',
      data: dto.data
    })),

    /**
     * No description
     *
     * @tags Movement Vector
     * @name GetMovementVectorLogs
     * @summary Get list of movement vector logs
     * @request GET:/movement-vectors/{id}/logs
     * @secure
     */
    getMovementVectorLogs: http.createRoute<string, ListMovementVectorLog>(
      id => ({
        url: `/movement-vectors/${id}/logs`,
        method: 'GET'
      })
    ),

    /**
     * No description
     *
     * @tags Movement Vector
     * @name GetMovementVectorsMatrix
     * @summary Get matrix of movement vectors
     * @request GET:/movement-vectors/matrix
     * @secure
     */
    getMovementVectorsMatrix: http.createRoute<
      { originCountries?: string; statuses?: string },
      MovementVectorMatrix
    >({
      url: `/movement-vectors/matrix`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Movement Vector
     * @name GetMovementVectorsTree
     * @summary Get tree of movement vectors
     * @request GET:/movement-vectors/tree
     * @secure
     */
    getMovementVectorsTree: http.createRoute<
      { originCountries?: string; statuses?: string },
      MovementVectorTree
    >({
      url: `/movement-vectors/tree`,
      method: 'GET'
    }),

    /**
     * @description Search destination countries by name dependent on user language ordered by ascending
     *
     * @tags Movement Vector
     * @name SearchDestinationCountriesAction
     * @summary Search destination countries
     * @request GET:/movement-vectors/search-destination-countries
     * @secure
     */
    searchDestinationCountriesAction: http.createRoute<
      { countryCode: string; name?: string },
      ListForSearchDestinationCountriesAsAnonymous
    >({
      url: `/movement-vectors/search-destination-countries`,
      method: 'GET'
    }),

    /**
     * @description Search origin countries by name dependent on user language ordered by ascending
     *
     * @tags Movement Vector
     * @name SearchOriginCountriesAction
     * @summary Search origin countries
     * @request GET:/movement-vectors/search-origin-countries
     * @secure
     */
    searchOriginCountriesAction: http.createRoute<
      { name?: string },
      ListForSearchOriginCountriesAsAnonymous
    >({
      url: `/movement-vectors/search-origin-countries`,
      method: 'GET'
    })
  },
  movementVectorPrices: {
    /**
     * No description
     *
     * @tags Movement Vector Price
     * @name CreateMovementVectorPrice
     * @summary Create movement vector price
     * @request POST:/movement-vector-prices
     * @secure
     */
    createMovementVectorPrice: http.createRoute<
      CreateMovementVectorPrice,
      MovementVectorPriceForAdmin[]
    >({
      url: `/movement-vector-prices`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Movement Vector Price
     * @name GetMovementVectorPrices
     * @summary Get list of movement vector prices
     * @request GET:/movement-vector-prices
     * @secure
     */
    getMovementVectorPrices: http.createRoute<
      { offset?: number; limit?: number },
      ListMovementVectorPriceForAdmin | ListMovementVectorPriceForAnonymousUser
    >({
      url: `/movement-vector-prices`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Movement Vector Price
     * @name GetMovementVectorPriceInfo
     * @summary Get movement vector price info
     * @request GET:/movement-vector-prices/{id}
     * @secure
     */
    getMovementVectorPriceInfo: http.createRoute<
      string,
      MovementVectorPriceForAdmin | MovementVectorPriceForAnonymousUser
    >(id => ({
      url: `/movement-vector-prices/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Movement Vector Price
     * @name UpdateMovementVectorPrice
     * @summary Update movement vector price
     * @request PUT:/movement-vector-prices/{id}
     * @secure
     */
    updateMovementVectorPrice: http.createRoute<
      { id: string; data: UpdateMovementVectorPrice },
      MovementVectorPriceForAdmin
    >(dto => ({
      url: `/movement-vector-prices/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  movementVectorProducts: {
    /**
     * No description
     *
     * @tags Movement Vector Product
     * @name CreateMovementVectorProduct
     * @summary Create movement vector product
     * @request POST:/movement-vector-products
     * @secure
     */
    createMovementVectorProduct: http.createRoute<
      CreateMovementVectorProduct,
      MovementVectorProductForAdmin[]
    >({
      url: `/movement-vector-products`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Movement Vector Product
     * @name GetMovementVectorProducts
     * @summary Get list of movement vector products
     * @request GET:/movement-vector-products
     * @secure
     */
    getMovementVectorProducts: http.createRoute<
      { offset?: number; limit?: number },
      | ListMovementVectorProductForAdmin
      | ListMovementVectorProductForAnonymousUser
    >({
      url: `/movement-vector-products`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Movement Vector Product
     * @name GetMovementVectorProductInfo
     * @summary Get movement vector product info
     * @request GET:/movement-vector-products/{id}
     * @secure
     */
    getMovementVectorProductInfo: http.createRoute<
      string,
      MovementVectorProductForAdmin | MovementVectorProductForAnonymousUser
    >(id => ({
      url: `/movement-vector-products/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Movement Vector Product
     * @name UpdateMovementVectorProduct
     * @summary Update movement vector product
     * @request PUT:/movement-vector-products/{id}
     * @secure
     */
    updateMovementVectorProduct: http.createRoute<
      { id: string; data: UpdateMovementVectorProduct },
      MovementVectorProductForAdmin
    >(dto => ({
      url: `/movement-vector-products/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  movementVectorRoutes: {
    /**
     * No description
     *
     * @tags Movement Vector Route
     * @name CreateMovementVectorRoute
     * @summary Create movement vector route
     * @request POST:/movement-vector-routes
     * @secure
     */
    createMovementVectorRoute: http.createRoute<
      CreateMovementVectorRoute,
      MovementVectorRouteForAdmin[]
    >({
      url: `/movement-vector-routes`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Movement Vector Route
     * @name GetMovementVectorRoute
     * @summary Get list of movement vector routes
     * @request GET:/movement-vector-routes
     * @secure
     */
    getMovementVectorRoute: http.createRoute<
      { offset?: number; limit?: number },
      ListMovementVectorRouteForAdmin | ListMovementVectorRouteForAnonymousUser
    >({
      url: `/movement-vector-routes`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Movement Vector Route
     * @name DeleteMovementVectorRoute
     * @summary Delete movement vector route
     * @request DELETE:/movement-vector-routes/{id}
     * @secure
     */
    deleteMovementVectorRoute: http.createRoute<string, void>(id => ({
      url: `/movement-vector-routes/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Movement Vector Route
     * @name GetMovementVectorRouteInfo
     * @summary Get movement vector info
     * @request GET:/movement-vector-routes/{id}
     * @secure
     */
    getMovementVectorRouteInfo: http.createRoute<
      string,
      MovementVectorRouteForAdmin | MovementVectorRouteForAnonymousUser
    >(id => ({
      url: `/movement-vector-routes/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Movement Vector Route
     * @name UpdateMovementVectorRoute
     * @summary Update movement vector route
     * @request PUT:/movement-vector-routes/{id}
     * @secure
     */
    updateMovementVectorRoute: http.createRoute<
      { id: string; data: UpdateMovementVectorRoute },
      MovementVectorRouteForAdmin
    >(dto => ({
      url: `/movement-vector-routes/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  packaging: {
    /**
     * No description
     *
     * @tags Packaging
     * @name CreatePackaging
     * @summary Create packaging
     * @request POST:/packaging
     * @secure
     */
    createPackaging: http.createRoute<CreatePackaging, PackagingForAdmin[]>({
      url: `/packaging`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Packaging
     * @name GetPackaging
     * @summary Get list of packaging
     * @request GET:/packaging
     * @secure
     */
    getPackaging: http.createRoute<
      { offset?: number; limit?: number },
      ListPackagingForAdmin | ListPackagingForAnonymousUser
    >({
      url: `/packaging`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Packaging
     * @name DeletePackaging
     * @summary Delete packaging
     * @request DELETE:/packaging/{id}
     * @secure
     */
    deletePackaging: http.createRoute<string, void>(id => ({
      url: `/packaging/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Packaging
     * @name GetPackagingInfo
     * @summary Get packaging info
     * @request GET:/packaging/{id}
     * @secure
     */
    getPackagingInfo: http.createRoute<
      string,
      PackagingForAdmin | PackagingForAnonymousUser
    >(id => ({
      url: `/packaging/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Packaging
     * @name UpdatePackaging
     * @summary Update packaging
     * @request PUT:/packaging/{id}
     * @secure
     */
    updatePackaging: http.createRoute<
      { id: string; data: UpdatePackaging },
      PackagingForAdmin
    >(dto => ({
      url: `/packaging/${dto.id}`,
      method: 'PUT',
      data: dto.data
    })),

    /**
     * @description Search packaging by query parameters. To search, must specify at least one of the parameters.
     *
     * @tags Packaging
     * @name SearchPackagingAction
     * @summary Search packaging
     * @request GET:/packaging/search
     * @secure
     */
    searchPackagingAction: http.createRoute<
      { providerId?: string; packagingId?: string; originCountryCode?: string },
      ListForSearchPackagingAsAnonymousUser
    >({
      url: `/packaging/search`,
      method: 'GET'
    })
  },
  products: {
    /**
     * No description
     *
     * @tags Product
     * @name CreateProduct
     * @summary Create product
     * @request POST:/products
     * @secure
     */
    createProduct: http.createRoute<CreateProduct, ProductForAdmin[]>({
      url: `/products`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Product
     * @name GetProducts
     * @summary Get list of products
     * @request GET:/products
     * @secure
     */
    getProducts: http.createRoute<
      { offset?: number; limit?: number },
      ListProductForAdmin | ListProductForAnonymousUser
    >({
      url: `/products`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Product
     * @name DeleteProduct
     * @summary Delete product
     * @request DELETE:/products/{id}
     * @secure
     */
    deleteProduct: http.createRoute<string, void>(id => ({
      url: `/products/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Product
     * @name GetProductInfo
     * @summary Get product info
     * @request GET:/products/{id}
     * @secure
     */
    getProductInfo: http.createRoute<
      string,
      ProductForAdmin | ProductForAnonymousUser
    >(id => ({
      url: `/products/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Product
     * @name UpdateProduct
     * @summary Update product
     * @request PUT:/products/{id}
     * @secure
     */
    updateProduct: http.createRoute<
      { id: string; data: UpdateProduct },
      ProductForAdmin
    >(dto => ({
      url: `/products/${dto.id}`,
      method: 'PUT',
      data: dto.data
    })),

    /**
     * No description
     *
     * @tags Product
     * @name SearchProductsAction
     * @summary Search products
     * @request GET:/products/search
     * @secure
     */
    searchProductsAction: http.createRoute<
      { movementVectorCode: string; customerType?: 'business' | 'individual' },
      ListForSearchProducts
    >({
      url: `/products/search`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Product Info Block
     * @name CreateProductInfoBlock
     * @summary Create product info-block
     * @request POST:/products/{id}/info-blocks
     * @secure
     */
    createProductInfoBlock: http.createRoute<
      { id: string; data: CreateProductInfoBlock },
      ProductInfoBlockForAdmin[]
    >(dto => ({
      url: `/products/${dto.id}/info-blocks`,
      method: 'POST',
      data: dto.data
    })),

    /**
     * No description
     *
     * @tags Product Info Block
     * @name GetProductInfoBlocks
     * @summary Get list of product info-blocks
     * @request GET:/products/{id}/info-blocks
     * @secure
     */
    getProductInfoBlocks: http.createRoute<
      { id: string; query?: { offset?: number; limit?: number } },
      ListProductInfoBlockForAdmin | ListProductInfoBlockForAnonymousUser
    >(dto => ({
      url: `/products/${dto.id}/info-blocks`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Product Info Block
     * @name DeleteProductInfoBlock
     * @summary Delete product info-block
     * @request DELETE:/products/info-blocks/{id}
     * @secure
     */
    deleteProductInfoBlock: http.createRoute<string, void>(id => ({
      url: `/products/info-blocks/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Product Info Block
     * @name GetProductInfoBlockInfo
     * @summary Get product info-block info
     * @request GET:/products/info-blocks/{id}
     * @secure
     */
    getProductInfoBlockInfo: http.createRoute<
      string,
      ProductInfoBlockForAdmin | ProductInfoBlockForAnonymousUser
    >(id => ({
      url: `/products/info-blocks/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Product Info Block
     * @name UpdateProductInfoBlock
     * @summary Update product info-block
     * @request PUT:/products/info-blocks/{id}
     * @secure
     */
    updateProductInfoBlock: http.createRoute<
      { id: string; data: UpdateProductInfoBlock },
      ProductInfoBlockForAdmin
    >(dto => ({
      url: `/products/info-blocks/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  productionCountries: {
    /**
     * No description
     *
     * @tags Production Country
     * @name CreateProductionCountry
     * @summary Create production country
     * @request POST:/production-countries
     * @secure
     */
    createProductionCountry: http.createRoute<
      CreateProductionCountry,
      ProductionCountryForAdmin[]
    >({
      url: `/production-countries`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Production Country
     * @name GetProductionCountries
     * @summary Get list of production countries
     * @request GET:/production-countries
     * @secure
     */
    getProductionCountries: http.createRoute<
      { offset?: number; limit?: number },
      ListProductionCountryForAdmin | ListProductionCountryForAnonymousUser
    >({
      url: `/production-countries`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Production Country
     * @name DeleteProductionCountry
     * @summary Delete production country
     * @request DELETE:/production-countries/{id}
     * @secure
     */
    deleteProductionCountry: http.createRoute<string, void>(id => ({
      url: `/production-countries/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Production Country
     * @name GetProductionCountryInfo
     * @summary Get production country info
     * @request GET:/production-countries/{id}
     * @secure
     */
    getProductionCountryInfo: http.createRoute<
      string,
      ProductionCountryForAdmin | ProductionCountryForAnonymousUser
    >(id => ({
      url: `/production-countries/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Production Country
     * @name UpdateProductionCountry
     * @summary Update production country
     * @request PUT:/production-countries/{id}
     * @secure
     */
    updateProductionCountry: http.createRoute<
      { id: string; data: UpdateProductionCountry },
      ProductionCountryForAdmin
    >(dto => ({
      url: `/production-countries/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  providers: {
    /**
     * No description
     *
     * @tags Provider
     * @name CreateProvider
     * @summary Create provider
     * @request POST:/providers
     * @secure
     */
    createProvider: http.createRoute<CreateProvider, ProviderForAdmin[]>({
      url: `/providers`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Provider
     * @name GetProviders
     * @summary Get list of providers
     * @request GET:/providers
     * @secure
     */
    getProviders: http.createRoute<
      { offset?: number; limit?: number },
      ListProviderForAdmin | ListProviderForAnonymousUser
    >({
      url: `/providers`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Provider
     * @name DeleteProvider
     * @summary Delete provider
     * @request DELETE:/providers/{id}
     * @secure
     */
    deleteProvider: http.createRoute<string, void>(id => ({
      url: `/providers/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Provider
     * @name GetProviderInfo
     * @summary Get provider info
     * @request GET:/providers/{id}
     * @secure
     */
    getProviderInfo: http.createRoute<
      string,
      ProviderForAdmin | ProviderForAnonymousUser
    >(id => ({
      url: `/providers/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Provider
     * @name UpdateProvider
     * @summary Update provider
     * @request PUT:/providers/{id}
     * @secure
     */
    updateProvider: http.createRoute<
      { id: string; data: UpdateProvider },
      ProviderForAdmin
    >(dto => ({
      url: `/providers/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  services: {
    /**
     * No description
     *
     * @tags Service
     * @name CreateService
     * @summary Create service
     * @request POST:/services
     * @secure
     */
    createService: http.createRoute<CreateService, ServiceForAdminView[]>({
      url: `/services`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Service
     * @name GetServices
     * @summary Get list of services
     * @request GET:/services
     * @secure
     */
    getServices: http.createRoute<
      { offset?: number; limit?: number },
      ListServiceForAdmin | ListServiceForAnonymousUser
    >({
      url: `/services`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Service
     * @name DeleteService
     * @summary Delete service
     * @request DELETE:/services/{id}
     * @secure
     */
    deleteService: http.createRoute<string, void>(id => ({
      url: `/services/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Service
     * @name GetServiceInfo
     * @summary Get service info
     * @request GET:/services/{id}
     * @secure
     */
    getServiceInfo: http.createRoute<
      string,
      ServiceForAdminView | ServiceForAnonymousUserView
    >(id => ({
      url: `/services/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Service
     * @name UpdateService
     * @summary Update service
     * @request PUT:/services/{id}
     * @secure
     */
    updateService: http.createRoute<
      { id: string; data: UpdateService },
      ServiceForAdminView
    >(dto => ({
      url: `/services/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  serviceTypes: {
    /**
     * No description
     *
     * @tags Service Type
     * @name CreateServiceType
     * @summary Create service type
     * @request POST:/service-types
     * @secure
     */
    createServiceType: http.createRoute<
      CreateServiceType,
      ServiceTypeForAdmin[]
    >({
      url: `/service-types`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Service Type
     * @name GetServiceTypes
     * @summary Get list of service types
     * @request GET:/service-types
     * @secure
     */
    getServiceTypes: http.createRoute<
      { offset?: number; limit?: number },
      ListServiceTypeForAdmin
    >({
      url: `/service-types`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags Service Type
     * @name DeleteServiceType
     * @summary Delete service type
     * @request DELETE:/service-types/{id}
     * @secure
     */
    deleteServiceType: http.createRoute<string, void>(id => ({
      url: `/service-types/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags Service Type
     * @name GetServiceTypeInfo
     * @summary Get service type info
     * @request GET:/service-types/{id}
     * @secure
     */
    getServiceTypeInfo: http.createRoute<string, ServiceTypeForAdmin>(id => ({
      url: `/service-types/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags Service Type
     * @name UpdateServiceType
     * @summary Update service type
     * @request PUT:/service-types/{id}
     * @secure
     */
    updateServiceType: http.createRoute<
      { id: string; data: UpdateServiceType },
      ServiceTypeForAdmin
    >(dto => ({
      url: `/service-types/${dto.id}`,
      method: 'PUT',
      data: dto.data
    }))
  },
  token: {
    /**
     * No description
     *
     * @tags Token
     * @name RefreshToken
     * @summary Refresh token
     * @request POST:/token/refresh
     * @secure
     */
    refreshToken: http.createRoute<RefreshToken, Token>({
      url: `/token/refresh`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags Token
     * @name TokenForAnonymous
     * @summary Get token for anonymous user
     * @request GET:/token
     * @secure
     */
    tokenForAnonymous: http.createRoute<void, Token>({
      url: `/token`,
      method: 'GET'
    })
  }
});

export { routesConfig };
