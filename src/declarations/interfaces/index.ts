import { Action } from "redux";

export interface IUserAction extends Action<string> {
  type: string;
  users: IUser[];
  user: IUser;
}

export interface IUserState {
  users: IUser[];
}

export interface IScheduleState {
  schedules: IAppointment[];
}

export interface IState<T> {
  isFetching: boolean;
  data: T[];
  item: T;
  lastUpdated: Date;
}

export interface IContactUsState extends IState<null> {
  sendFinished: boolean;
  sendFailed: boolean;
  next: any;
}

export interface IAjaxStatusState {
  requestsCount: number;
}

export interface IAction<T> extends Action<string> {
  type: string;
  data: T[];
  item: T;
  receivedAt: Date;
}

export interface IInvoice {
  date: Date;
  customer_id: string;
  total_ex_taxes: number;
  taxes: number;
}

export interface IActionResult<T> {
  type: string;
  data: T;
}

export enum ScheduleType {
  Child = "Child",
  Adult = "Adult",
}

export enum ProductType {
  Deposit = "Deposit",
  FullPayment = "FullPayment",
  OnlineDiscount = "OnlineDiscount",
  Cash = "Cash",
}

export interface IAppointment {
  id: string;
  name: string;
  levelSymbol: string;
  dateFrom: Date;
  dateTo: Date;
  priceDescription: string;
  description: string;
  type: ScheduleType;
}

export interface IGallery {
  name: string;
  id: string;
  image: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  position: string;
  description: string;
  fullDescription: string;
}

export enum LevelSymbolType {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
}

export interface ICourse {
  id: string;
  title: string;
  description: string;
  type: ScheduleType;
  image: string;
  levelSymbol: string;
}

export interface IArticle {
  id: string;
  title: string;
  url: string;
  backgroundImage: string;
}

export interface IQuestion {
  id: string;
  title: string;
  description: string;
}

export interface IReason {
  id: string;
  title: string;
  description: string;
  iconImage: string;
  iconImageAlt: string;
}

export interface IReview {
  id: string;
  name: string;
  description: string;
  image: string;
  position: string;
}

export interface IMessage {
  from: string;
  to: string;
  subject: ScheduleType;
  text: string;
}

export interface IContactUsProps {
  isLoading: boolean;
  submitHandle: any;
  focusoutHandler: any;
  contactForm: any;
  handleChange: any;
  errors: any;
  finishSendMsg: string;
  formEl: any;
}

export interface ISigningUpFormProps {
  isAppointmentLoading: boolean;
  focusoutHandler: any;
  signingUpForm: any;
  handleChange: any;
  errors: any;
  appointment: IAppointment;
  customerLoading: boolean;
  addedCustomerSuccessful: boolean;
  setContactForm: any;
  continueHandler: any;
  paymentType: PaymentType;
  customer: ICustomer;
}

export interface IApplyContext {
  rootPath: string;
  history: any;
}

export interface IConditionsContext {
  rootPath: string;
  history: any;
}

export interface IAppContext {
  authProvider: any;
  dataProvider: any;
}

export interface IValidationForm {
  validateFiled(value: any, field: any): void;
  validateAllFiled(signingUpForm: any, callBack: any);
  errors: any;
  isValid: boolean;
}

export interface ICustomer {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  paymentType: PaymentType;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  scheduleId: string;
}

export interface ICustomerState extends IState<ICustomer> {
  addedSuccessful: boolean;
  paymentType: PaymentType;
}

export enum PaymentType {
  NotSelected = "NotSelected",
  Cash = "Cash",
  Deposit = "Deposit",
  FullPaid = "FullPaid",
}

export enum PaymentMethod {
  Cash = "Cash",
  Stripe = "Stripe",
}

export enum PaymentStatus {
  Paid = "Paid",
  NotConfirmed = "NotConfirmed",
  NotPaid = "NotPaid",
}

export interface IStripeConfig {
  fullPay: IStripePriceConfig;
  deposit: IStripePriceConfig;
  publicKey: string;
}

export interface IStripePriceConfig {
  priceKey: string;
  price: number;
}
