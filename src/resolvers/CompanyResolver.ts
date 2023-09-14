import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Company } from '../entities/Company';

@Resolver()
export class CompanyResolver {
  @Query(() => String)
  companyHello() {
    return 'hello company';
  }

  @Query(() => [Company])
  companies() {
    return Company.find();
  }

  @Mutation(() => Boolean)
  async createCompany(
    @Arg('name') name: string,
    @Arg('description') description: string,
    @Arg('logo') logo: string,
    @Arg('contactName') contactName: string,
    @Arg('contactPhone') contactPhone: string,
    @Arg('contactEmail') contactEmail: string,
    @Arg('country') country: string
  ) {
    try {
      await Company.insert({
        name,
        description,
        logo,
        contactName,
        contactPhone,
        contactEmail,
        country
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}
