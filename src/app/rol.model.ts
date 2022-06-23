import { Base } from "./base.model";

export class Rol extends Base {

	name: string;
	description: string;
	token: string;
	teamId: number;
	staffRol: boolean;
	// Permissions
	teamAdmin: boolean;
	canGetUsers: boolean;
	canAddUser: boolean;
	canRemoveUser: boolean;
	canEditUser: boolean;
	canGetTeams: boolean;
	canCreateTeam: boolean;
	canRemoveTeam: boolean;
	canEditTeam: boolean;
	canGetRoles: boolean;
	canCreateRol: boolean;
	canRemoveRol: boolean;
	canEditRol: boolean;
	canGetCategories: boolean;
	canCreateCategory: boolean;
	canRemoveCategory: boolean;
	canEditCategory: boolean;
	canGetPages: boolean;
	canCreatePage: boolean;
	canRemovePage: boolean;
	canEditPage: boolean;
	canGetProducts: boolean;
	canCreateProduct: boolean;
	canRemoveProduct: boolean;
	canEditProduct: boolean;
	canGetProductPages: boolean;
	canCreateProductPage: boolean;
	canRemoveProductPage: boolean;
	canEditProductPage: boolean;
	canGetReviews: boolean;
	canCreateReview: boolean;
	canRemoveReview: boolean;
	canEditReview: boolean;
	canGetReviewAttributes: boolean;
	canCreateReviewAttribute: boolean;
	canRemoveReviewAttribute: boolean;
	canEditReviewAttribute: boolean;

	constructor(data: any) {

		super(data);

		this.name = data.name;
		this.description = data.description;
		this.token = data.token;
		this.teamId = data.teamId;

		this.teamAdmin = data.teamAdmin;
		this.canGetUsers = data.canGetUsers;
		this.canEditUser = data.canEditUser;
		this.canGetTeams = data.canGetTeams;
		this.canCreateTeam = data.canCreateTeam;
		this.canRemoveTeam = data.canRemoveTeam;
		this.canEditTeam = data.canEditTeam;
		this.canGetRoles = data.canGetRoles;
		this.canCreateRol = data.canCreateRol;
		this.canRemoveRol = data.canRemoveRol;
		this.canEditRol = data.canEditRol;
		this.canGetCategories = data.canGetCategories;
		this.canCreateCategory = data.canCreateCategory;
		this.canRemoveCategory = data.canRemoveCategory;
		this.canEditCategory = data.canEditCategory;
		this.canGetPages = data.canGetPages;
		this.canCreatePage = data.canCreatePage;
		this.canRemovePage = data.canRemovePage;
		this.canEditPage = data.canEditPage;
		this.canGetProducts = data.canGetProducts;
		this.canCreateProduct = data.canCreateProduct;
		this.canRemoveProduct = data.canRemoveProduct;
		this.canEditProduct = data.canEditProduct;
		this.canGetProductPages = data.canGetProductPages;
		this.canCreateProductPage = data.canCreateProductPage;
		this.canRemoveProductPage = data.canRemoveProductPage;
		this.canEditProductPage = data.canEditProductPage;
		this.canGetReviews = data.canGetReviews;
		this.canCreateReview = data.canCreateReview;
		this.canRemoveReview = data.canRemoveReview;
		this.canEditReview = data.canEditReview;
		this.canGetReviewAttributes = data.canGetReviewAttributes;
		this.canCreateReviewAttribute = data.canCreateReviewAttribute;
		this.canRemoveReviewAttribute = data.canRemoveReviewAttribute;
		this.canEditReviewAttribute = data.canEditReviewAttribute;

	}

	public getPutPermissions(): Record<string, boolean> {

		return {

			'user': this.canEditUser,
			'team': this.canEditTeam,
			'data': this.canEditRol,
			'category': this.canEditCategory,
			'page': this.canEditPage,
			'product': this.canEditProduct,
			'productPage': this.canEditProductPage,
			'review': this.canEditReview,
			'reviewAttribute': this.canEditReviewAttribute,

		};

	}

	public getGetPermissions(): Record<string, boolean> {

		return {

			'users': this.canGetUsers,
			'teams': this.canGetTeams,
			'dataes': this.canGetRoles,
			'categories': this.canGetCategories,
			'pages': this.canGetPages,
			'products': this.canGetProducts,
			'productPages': this.canGetProductPages,
			'reviews': this.canGetReviews,
			'reviewAttributes': this.canGetReviewAttributes
		};

	}

	public getPostPermissions(): Record<string, boolean> {

		return {

			'user': this.canAddUser,
			'teams': this.canCreateTeam,
			'dataes': this.canCreateRol,
			'categories': this.canCreateCategory,
			'pages': this.canCreatePage,
			'products': this.canCreateProduct,
			'productPages': this.canCreateProductPage,
			'reviews': this.canCreateReview,
			'reviewAttributes': this.canCreateReviewAttribute,
		};

	}

	public getDeletePermissions(): Record<string, boolean> {

		return {

			'users': this.canRemoveUser,
			'teams': this.canRemoveTeam,
			'dataes': this.canRemoveRol,
			'categories': this.canRemoveCategory,
			'pages': this.canRemovePage,
			'products': this.canRemoveProduct,
			'productPages': this.canRemoveProductPage,
			'reviews': this.canRemoveReview,
			'reviewAttributes': this.canRemoveReviewAttribute,

		};

	}
}
